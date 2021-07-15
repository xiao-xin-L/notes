class KPromise {
  constructor(handleFn) {

    this.status = "pending";

    // 储存传进来的then的resolve回调
    this.handleResolved = [];

    // 储存传进来的then的reject回调
    this.handleRejected = [];

    handleFn(this._resolve.bind(this), this._reject.bind(this));
  }

  _resolve(val) {
    // setTimeout(() => {
    //   console.log("_resolve");
    //   // return val;
    //   let handle;
    //   while(handle = this.handleResolved.shift()) {
    //     handle(val);
    //   }
    //
    // }, 0);

    this.observer(() => {

      if (this.status !== "pending") return;

      this.status = "fulfilled";

      let handle;
      while(handle = this.handleResolved.shift()) {
        handle(val);
      }
    })

  }

  _reject(err) {
    // setTimeout(() => {
    //   console.log("_reject");
    //   // return err;
    //   let handle;
    //   while(handle = this.handleRejected.shift()) {
    //     handle(err);
    //   }
    // }, 0);

    this.observer(() => {

      if (this.status !== "pending") return;

      this.status = "rejected";

      let handle;
      while(handle = this.handleRejected.shift()) {
        handle(err);
      }
    })

  }

  observer(callback) {
    let ob = new MutationObserver(() => {

      callback();

      ob.disconnect();

      ob = null;
    });

    ob.observe(document.body, {
      attributes: true
    })

    document.body.setAttribute("_dataList", Math.random().toString());


  }

  then(resolved, rejected) {
    // console.log("_then");
    // this.handleResolved.push(resolved);
    // this.handleRejected.push(rejected);

    return new KPromise((resolve, reject) => {
      this.handleResolved.push(val => {
        val = resolved(val);

        if (val instanceof KPromise) {
          return val.then(resolve);
        }

        resolve(val);
      });
      this.handleRejected.push(err => {
        err = rejected(err);
        reject(err);
      });
    });
  }
}
// @ts-expect-error
uni.invokePushCallback({
    type: 'enabled',
});
Promise.resolve().then(() => {
    plus.push.setAutoNotification && plus.push.setAutoNotification(false);
    const info = plus.push.getClientInfo();
    if (info.clientid) {
        // @ts-expect-error
        uni.invokePushCallback({
            type: 'clientId',
            cid: info.clientid,
        });
    }
    plus.push.addEventListener('click', (result) => {
        // @ts-expect-error
        uni.invokePushCallback({
            type: 'click',
            message: result,
        });
    });
    plus.push.addEventListener('receive', (result) => {
        // @ts-expect-error
        uni.invokePushCallback({
            type: 'pushMsg',
            message: result,
        });
    });
});

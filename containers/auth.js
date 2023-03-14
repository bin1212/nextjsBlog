import React, { Component } from 'react';
import axios from 'axios';
import Router from 'next/router';

axios.defaults.baseURL = 'http://127.0.0.1:3000';;

// async function ({ req }) {
//     try {
//         const headers = {};
//         if (req) headers.cookie = req.headers.cookie;
//         const res = (await axios({ url: '/api/auth', headers })).data;
//         return res.data || false;
//     }
//     catch (e) {
//         console.log('Auth error: ' + e.message);
//         return false;
//     }
// }


export default (View) => class extends Component {
    static async getInitialProps(arg) {
        let state = { isLogin: true };

        const isLogin = await hasAuth(arg);
        if (!isLogin) state.isLogin = false;

        if (typeof View.getInitialProps === 'function') {
            const res = await View.getInitialProps(arg);
            state = { ...state, ...res };
        }

        return state;
    }
    componentDidMount() {
        if (!this.props.isLogin) {
            Router.replace('/about');
        }
    }
    render() {
        if (this.props.isLogin) {
            return <View {...this.props} />;
        }
        // 认证期间显示的内容
        return (
            <div>加载中 ...</div>
        );
    }
};
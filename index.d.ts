import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name BaiduOcr
 * @description
 * This plugin does something
 */
export declare class BaiduOcr extends IonicNativePlugin {
    /**
     * 初始化
     */
    init(success: Function, error: Function): void;
    /**
     * 销毁
     */
    destroy(success: Function, error: Function): void;
    /**
     * 扫描身份证
     * @param {any} params
     * @param {function} success
     * @param {function} error
     */
    scan(params: {
        contentType: string;
        nativeEnable?: boolean;
        nativeEnableManual?: boolean;
    }, success: Function, error: Function): void;
}

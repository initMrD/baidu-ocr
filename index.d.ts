import {IonicNativePlugin} from '@ionic-native/core';

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

    /**
     * 识别身份证
     * @param {string} params.idCardSide 身份证正/反 front/back
     * @param {string} params.filePath 文件路径
     * @param {function} success
     * @param {function} error
     */
    recIDCard(params: {
        idCardSide: string; filePath: string;
    }, success: Function, error: Function);

    /**
     * 通用文字识别
     * @param {string} params.filePath 文件路径
     * @param {function} success
     * @param {function} error
     */
    recHighGeneral(params: {
        filePath: string;
    }, success: Function, error: Function);

    /**
     * 行驶证识别
     * @param {string} params.filePath 文件路径
     * @param {function} success
     * @param {function} error
     */
    recDiving(params: {
        filePath: string;
    }, success: Function, error: Function);
}

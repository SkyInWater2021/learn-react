import * as CryptoJS from "crypto-js"

// 加密算法Key值
export const ENCRYPT_ECB = "f4k9f5w7f8g4er26"

export function encryptECB(message: string, key: string): string {
  // 将密钥转换为 WordArray
  const keyWordArray = CryptoJS.enc.Utf8.parse(key)

  // 将消息转换为 WordArray
  const messageWordArray = CryptoJS.enc.Utf8.parse(message)

  // 使用 AES 算法和 ECB 模式进行加密
  const encrypted = CryptoJS.AES.encrypt(messageWordArray, keyWordArray, {
    mode: CryptoJS.mode.ECB
  })

  // 将密文转换为 Base64 编码
  const encryptedBase64 = encrypted.ciphertext.toString(CryptoJS.enc.Base64)

  // 返回加密后的密文（Base64 编码）
  return encryptedBase64
}

// ECB模式下使用的解密函数
export function decryptECB(encryptedBase64: string, key: string): string {
  // 将密钥转换为 WordArray
  const keyWordArray = CryptoJS.enc.Utf8.parse(key)

  // 将 Base64 编码的密文转换为 WordArray
  const encryptedWordArray = CryptoJS.enc.Base64.parse(encryptedBase64)

  // 创建 CipherParams 对象
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: encryptedWordArray
  })

  // 使用 AES 算法和 ECB 模式进行解密
  const decrypted = CryptoJS.AES.decrypt(cipherParams, keyWordArray, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })

  // 将解密后的 WordArray 转换为 UTF8 字符串
  const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8)

  // 返回解密后的字符串
  return decryptedStr
}

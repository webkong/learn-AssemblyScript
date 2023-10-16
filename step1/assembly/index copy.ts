// The entry file of your WebAssembly module.
@external("env","alert")
declare function alert(message: string): void;

@external("env","notice")
declare function notice(message: string): void;

// 声明alert函数，它是一个外部函数，可以从JavaScript中导入
// 定义一个WebAssembly函数，该函数调用alert
export function showAlert(str: string): void {
  alert(str);
  notice(str)
}
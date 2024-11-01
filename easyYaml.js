
let data_dict = null;
let new_data_dict = null;

function getNewDataDict() {
    return new_data_dict;
}

function setDataDict(data) {
    data_dict = data;
    new_data_dict = data;
}

function getData(key) {
    let data = data_dict;
    for(key in key.sprit('.')){
        data = data[key];
    }
    return data;
}

function getNewData(key) {
    let data = new_data_dict;
    for(key in key.sprit('.')){
        data = data[key];
    }
    return data;
}

function setData(key, value) {
    let data = new_data_dict;
    for(key in key.sprit('.')){
        data = data[key];
    }
    data = value;
}

function isInput(key, value){
    return (getData(key) == value);
}

// class InputBox {

//     constructor(key, value, inputValue) {
//         this.key = key;
//         this.value = value;
//         this.inputValue = inputValue;
//     }

//     isInput()  {
//         return (this.value != this.inputValue);
//     }

//     getInputValue() {
//         return this.inputValue;
//     }

//     reset() {
//         this.inputValue = this.value;
//     }

//     getBoxHTML()  {
//         let html = `<input type="text" value="${this.inputValue}" />`;
//         return html;
//     }

//     getHTML() {
//         let html = `<div class="input-box">
//             <label>${this.key}</label>
//             ${this.getBoxHTML()}
//         </div>`;
//         return html;
//     }
// }

// class BooleanInputBox extends InputBox {
    
//     constructor(value, inputValue) {
//         super(value, inputValue);
//     }


// }

if (typeof module === 'object' && module.exports)
    module.exports = {
        setDataDict,
        getData,
        setData,
        getNewData,
        isInput,
        getNewDataDict,
    }
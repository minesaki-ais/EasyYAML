
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
    for(tmp in key.split('.')){
        data = data[tmp];
    }
    return data;
}

function getNewData(key) {
    let data = new_data_dict;
    for(tmp in key.split('.')){
        data = data[tmp];
    }
    return data;
}

function setData(key, value) {
    let keys = key.split('.');
    new_data_dict = recSetData(new_data_dict, keys, value, 0);
    return new_data_dict;
}

function recSetData(data, keys, value, index) {
    console.log(data, keys, value, index);
    if(keys.length == index){
        return value;
    }
    data[keys[index]] = recSetData(data[keys[index]], keys, value, index+1);
    return data;
}

function isInput(key, value){
    return (getData(key) != value);
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
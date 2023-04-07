const validator = (data) => {
    return Object.keys(data).filter((field)=>data[field].length===0);
}



export default validator;
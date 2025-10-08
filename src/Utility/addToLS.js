export const getDataToLs = () =>{
    const storedData = JSON.parse(localStorage.getItem('istalled'));
    if(storedData){
        return storedData;
    }
    else{
        return [];
    }
}

export const addToLs = (id) => {
    const storedData = getDataToLs();
    if(storedData.includes(id)){
        alert('This app is Already Installed')
    }
    else{
        storedData.push(id);
        const data = JSON.stringify(storedData);
        localStorage.setItem('istalled',data);
    }
}
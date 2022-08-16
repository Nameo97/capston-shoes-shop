// import { kiemtraRong} from "./validation";

function getEle (id){
    return document.querySelector(id)
}

const getValue = () => {

        const infoSignUp = new Info();
        infoSignUp.email = getEle('#email').value;
        infoSignUp.password = getEle('#password').value;
        infoSignUp.name = getEle('#name').value;
        infoSignUp.phone = getEle('#phone').value;

        const male = getEle('#male').checked;
        const gender = infoSignUp.gender(male);
    return {...infoSignUp, gender}
}

getEle('#btnSubmit').onclick = (e) =>{
    
        e.preventDefault()
    
        const valid = validation()
    
       if(valid){
           const info = getValue()
            
            axios({
                url:'https://shop.cyberlearn.vn/api/Users/signup',
                method:'POST',
                data:info
            })
            .then(response =>{
                alert(response.data.message)
               
            })
            .catch(err =>{
                console.log(err)
            })
       } 
    }
    







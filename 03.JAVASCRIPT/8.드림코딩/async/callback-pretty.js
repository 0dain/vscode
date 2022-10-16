
//콜백 나쁜 예제 Promise로 예쁘게 고치기
class UserStorage{
    loginUser(id, pw){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
              if((id==='ellie'&&pw==='dream')||(id==='coder'&&pw==='academy')){
                resolve(id);
              }else{
                reject(new Error('not found'));
              }
            }, 2000);
        });
    }
  
    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(user==='ellie') {
                  resolve({name:'ellie', role:'admin'});
                } else{
                  reject(new Error('no access'));
                }
              }, 1000);
        });      
    }
  }
  
  const userStorage=new UserStorage();
  const id=prompt('id');
  const pw=prompt('pw');
  userStorage.loginUser(id, pw)
  .then(userStorage.getRoles)
  .then(user=>alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);

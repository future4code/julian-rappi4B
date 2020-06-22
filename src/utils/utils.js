export const validedToken =(context)=>{
 const localToken = localStorage.getItem('rappi4BUserInfos') && 
 JSON.parse(localStorage.getItem('rappi4BUserInfos')).token;
 const globalToken = context && context.userInfos && context.userInfos.token;

 return ! localToken ? globalToken : localToken
};
export const validedInfos =(context)=>{
  const localInfos = localStorage.getItem('rappi4BUserInfos') && 
  JSON.parse(localStorage.getItem('rappi4BUserInfos')).user;
  const globalInfos = context && context.user;

  return ! localInfos ? globalInfos : localInfos
};
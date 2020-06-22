export const validedToken =(context)=>{
 return ! localStorage.getItem('rappi4BToken') &&
 localStorage.getItem('rappi4BToken') === '' &&
 context !== undefined ? 
 context.userInfos : localStorage.getItem('rappi4BToken')
};
const uuidV4=require("uuid").v4;

// eslint-disable-next-line
const createUser=({name=''}={})=>(
    {
        id:uuidV4(),
        name
    }
);
const createMessage=({message='',sender=''}={})=>(
    {
        id:uuidV4(),
        time:getTime(new Date(Date.now())),
        message,
        sender
    }
);
const createChat=({messages=[],name="JavaScript",users=[]}={})=>({
    id:uuidV4(),
    name,
    messages,
    users,
    typingUsers:[]

});
const getTime=(date)=>{
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}
module.exports={
    createUser,
    createMessage,
    createChat,
}

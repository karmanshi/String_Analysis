
//Total Number of words
export function total_Number_Words(str){
    let split_str = str.split(" ")
    return split_str.length
}

//Total Number of Characters
export function total_Number_character(str){
    return  str.length
}

//Total Number of Spaces
export function total_Number_Spaces(str){
    let split_str= str.split('')
    let count=0
    for(let word of str){
        if(word == ' ')
        {
            count++
        }
    }
    return count
}

//Unique Words
export function Unique_Words(str){
   let split_str = str.split(" ")
   let list = []
   for(let i=0;i<split_str.length;i++)
   {
       if(!list.includes(split_str[i])){
           list.push(split_str[i])
       }
   }
   return list.length
}

//Count of Unique Characters
export function Unique_Characters(str){
    let split_str = str.split('')
   let list = []
   for(let i=0;i<split_str.length;i++)
   {
       if(!list.includes(split_str[i])){
           list.push(split_str[i])
       }
   }
   return list.length
}



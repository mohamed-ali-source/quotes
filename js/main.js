var quotes=[
    {
        quote:"“So many books, so little time.”",
        author:"― Frank Zappa"
    },
    {
        quote:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero"
    },
    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West"
    },
    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },
    {
        quote:"“If you tell the truth, you don't have to remember anything.”",
        author:"― Mark Twain"
    },
    {
        quote:"“A friend is someone who knows all about you and still loves you.”",
        author:"― Elbert Hubbard"
    },
    {
        quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        author:"― Oscar Wilde"
    },
    {
        quote:"“Always forgive your enemies; nothing annoys them so much.”",
        author:"― Oscar Wilde"
    },
    {
        quote:"“That which does not kill us makes us stronger.”",
        author:"― Friedrich Nietzsche"
    },
    {
        quote:"“A day without sunshine is like, you know, night.”",
        author:"― Steve Martin"
    },
]
var previousNumber;
var indexRandom;
var newArr=[];

function appearsQuotes(){ 
    if(newArr.length==quotes.length){
        newArr=[];
    }
    do {
        indexRandom=Math.trunc(quotes.length * Math.random());
    } while (indexRandom === previousNumber || newArr.includes(indexRandom));
    
    previousNumber=indexRandom;
    newArr.push(indexRandom)

    console.log(indexRandom);
    document.getElementById("quote").innerHTML=quotes[indexRandom].quote;
    document.getElementById("auther").innerHTML=quotes[indexRandom].author;
}



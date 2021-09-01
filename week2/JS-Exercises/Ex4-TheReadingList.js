'use strict'

let bookList = [
  {title:'The subtle art of not giving a f*ck', author: 'Mark Manson', alreadyRead: true},
  {title: 'Every thing is f*cked', author: 'Mark Manson', alreadyRead: false},
  {title: 'Forty rules of love', author: 'Elif Shafak', alreadyRead: true}
];

for ( let i in bookList) {
    console.log(bookList[i]['title'], 'by', bookList[i]['author']);

    if (bookList[i]['alreadyRead'] == true) {
  console.log('You already read ', '"', bookList[i]['title'], '"');
  } else {
    console.log('You still need to read ', '"', bookList[i]['title'], '"');
  }
};


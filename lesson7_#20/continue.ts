 // Continue sẽ vẫn chạy chương trình nếu sai => nếu sai thì sẽ k ghi vô dữ liệu được gán 
 
 let index = 9;
 let count = 0;

 do {
    index += 1;
    if (index % 2){
        continue;
    }
    count += 1;
 } while (index < 99);
 console.log(count); // 45
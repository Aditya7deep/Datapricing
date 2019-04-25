function fun()
{
     var temp=Number(document.getElementById("in").value);
    temp=temp*1024;
    var count=temp;
    var res=0;
    if(count >=0 && count <=1024)
        {
            res+=((count/10));
        }
    
    if(count >1024 && count <=2048)
        {
            res+=((count/10));
            res+=90;
        }
    if(count >2048 && count <=3072)
        {
            res+=((count/5));
            res+=150;
        }
    if(count >3072 && count <=4096)
        {
            res+=((count/7));
            res+=250;
        }
    if(count >4096 && count <=5120)
        {
            if(count<=4403.2)
                {
                    res+=300;
                }
            else{
                res+=300;
                res+=((count-4403.2)/10);
            }   
        }
     document.getElementById("out").value=res;
}
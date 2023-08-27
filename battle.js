let tab=[0,1,2,3,4];
let tab2=[]

for(let i=0; i<tab.length-1; i++){
    if(i==0){
        z=4
        for(j=0; j<5; j++){
            tab2[j]=tab[z];
            z=z-1;
        }
        
        console.log(tab)
        
    }
    
    if(i==1){
        z=3
        tab=tab2;
        tab2=[]
        for(j=0; j<4; j++){
            tab2[j]=tab[z];
            z=z-1;
        }
        for(j=0; j<4; j++){
            tab[j]=tab2[j]
        }
    }
    if(i==2){
        z=2
        tab2=tab
        for(j=0; j<3; j++){
            tab2[j]=tab[z];
            z=z-1;
        }
    }

}

console.log(tab2);
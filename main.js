function num(son){

    if(son == 0) { 
        return "0 dan katta son kiriting"
    }else if( son <= -1){
        return "Musbat son kiriting"
    }
    if(son <9) return son

    if(son > 99999) return "Xozircha faqat 5 xonali sonlar kiriting"

    // -------------------------------Ikki xonali sonlar------------------------------------
if(son<99){
    if(son % 10 ==0){
        let birlik = son % 10
        let onlik = son % 100 / 10
        let natija=(birlik.toString())+(onlik.toString())
        return natija
    }else{
        let birlik = son % 10
        let onlik = son % 100 / 10

        return (birlik*10)+(Math.trunc(onlik))
    }
    //--------------------------------- Uch xonali sonlar--------------------------------
}else if(son<999){
    if(son % 10 == 0){
        let birlik = son % 10
        let onlik = Math.trunc(son % 100 / 10)
        let yuzlik = Math.trunc(son / 100 % 10)

        let natija = (birlik.toString()  +   (Math.trunc(onlik.toString()) ) +  yuzlik.toString())
        return natija
    }else{
        let birlik = son % 10
        let onlik = Math.trunc(son % 100 / 10)
        let yuzlik = Math.trunc(son / 100 )

        return  (birlik*100)  +  (onlik*10)  +  yuzlik
    }
    //---------------------------------- Tort xonali sonlar-----------------------------
}else if(son<9999){
    if(son % 10 ==0){
        let birlik = son % 10
        let onlik = Math.trunc(son % 100 / 10)
        let yuzlik = Math.trunc(son / 100 % 10)
        let minglik = Math.trunc(son / 1000 % 100)

        let natija = (birlik.toString() + (onlik.toString())  +  yuzlik.toString() + minglik.toString())

        return natija
    }else{
        let birlik = son % 10
        let onlik = Math.trunc(son % 100 / 10)
        let yuzlik = Math.trunc(son / 100 % 10)
        let minglik = Math.trunc(son / 1000 % 100)

        return (birlik*1000)  +  (onlik*100)  +  (yuzlik*10) + minglik
    }
    //------------------------------Besh xonali son--------------------------------------
  }else if(son < 99999){
    let birlik = son % 10
    let onlik = Math.floor((son / 10) % 10)
    let yuzlik = Math.floor((son / 100) % 10)
    let minglik = Math.floor((son / 1000) % 10)
    let on_minglik = Math.floor(son / 10000)

     let natija = (birlik).toString() + (onlik ).toString() + (yuzlik ).toString() + (minglik ).toString() + on_minglik.toString();

     return natija
  }else{
    let onlik = Math.floor((son / 10) % 10)
    let yuzlik = Math.floor((son / 100) % 10)
    let minglik = Math.floor((son / 1000) % 10)
    let on_minglik = Math.floor(son / 10000)

    return (birlik*10000)  +  (onlik*1000)  +  (yuzlik*100) + (minglik*10) +on_minglik
  }
}
let result = num(12345)
console.log(result);
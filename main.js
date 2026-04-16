function num(son){

    if(son ==0)  return "0 dan katta son kiriting"
    if(son < 9) return son
    if(son > 9999) return "Xozircha faqat 4 xonali sonlar kiriting"

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

        let natija = (birlik.toString()  +   (Math.trunc(onlik.toString()) ) +  yuzlik.toString() + minglik.toString())
        return natija
    }else{
        let birlik = son % 10
        let onlik = Math.trunc(son % 100 / 10)
        let yuzlik = Math.trunc(son / 100 % 10)
        let minglik = Math.trunc(son / 1000 % 100)

        return (birlik*1000)  +  (onlik*100)  +  (yuzlik*10) + minglik
    }
  }
}
let result = num(12347)
console.log(result);
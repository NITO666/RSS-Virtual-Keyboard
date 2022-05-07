let body = document.querySelector('body')
let row1E = [['`','~'],['1','!'],['2','@'],['3','#'],['4','$'],['5','%'],['6','^'],['7','&'],['8','*'],['9','('],['0',')'],['-','_'],['=','+'],['Backspace','Backspace']]
let row2E = [['Tab','Tab'],['q','Q'],['w','W'],['e','E'],['r','R'],['t','T'],['y','Y'],['u','U'],['i','I'],['o','O'],['p','P'],['[','{'],[']','}'],['\\','|'],['Del','Del']]
let row3E = [['CapsLock','CapsLock'],['a','A'],['s','S'],['d','D'],['f','F'],['g','G'],['h','H'],['j','J'],['k','K'],['l','L'],[';',':'],["'",'"'],['Enter','Enter'],]
let row4E = [['Shift','Shift','ShiftLeft'],['z','Z'],['x','X'],['c','C'],['v','V'],['b','B'],['n','N'],['m','M'],[',','<'],['.','>'],['/','?'],['&#9650;','&#9650;'],['Shift','Shift','ShiftRight']]
let row5E = [['Ctrl','Ctrl','ControlLeft'],['Win','Win','MetaLeft'],['Alt','Alt','AltLeft'],['',''],['Alt','Alt','AltRight'],['&#9668;','&#9668;'],['&#9660;','&#9660;'],['&#9658;','&#9658;'],['Ctrl','Ctrl','ControlRight']]
let rowsE = [row1E,row2E,row3E,row4E,row5E]
let row1R = [['ё','Ё'],['1','!'],['2','@'],['3','#'],['4','$'],['5','%'],['6','^'],['7','&'],['8','*'],['9','('],['0',')'],['-','_'],['=','+'],['Backspace','Backspace']]
let row2R = [['Tab','Tab'],['й','Й'],['ц','Ц'],['у','У'],['к','К'],['е','Е'],['н','Н'],['г','Г'],['ш','Ш'],['щ','Щ'],['з','З'],['х','Х'],['ъ','Ъ'],['\\','|'],['Del','Del']]
let row3R = [['CapsLock','CapsLock'],['ф','Ф'],['ы','Ы'],['в','В'],['а','А'],['п','П'],['р','Р'],['о','О'],['л','Л'],['д','Д'],['ж','Ж'],["э",'Э'],['Enter','Enter'],]
let row4R = [['Shift','Shift','ShiftLeft'],['я','Я'],['ч','Ч'],['с','С'],['м','М'],['и','И'],['т','Т'],['ь','Ь'],['б','Б'],['ю','Ю'],['/','?'],['&#9650;','&#9650;'],['Shift','Shift','ShiftRight']]
let row5R = [['Ctrl','Ctrl','ControlLeft'],['Win','Win','MetaLeft'],['Alt','Alt','AltLeft'],['',''],['Alt','Alt','AltRight'],['&#9668;','&#9668;'],['&#9660;','&#9660;'],['&#9658;','&#9658;'],['Ctrl','Ctrl','ControlRight']]
let rowsR = [row1R,row2R,row3R,row4R,row5R]
let allowed = true
function getLocalStorageRus() {
    if(localStorage.getItem('rus')) {
      return localStorage.getItem('rus');
    }else{
        return 'false';
    }
  }
  
window.addEventListener('load', getLocalStorageRus)
let rus = getLocalStorageRus()
let caps = 'false'
function createElements(){
    let container = document.createElement('div')
    container.className = 'container'
    body.appendChild(container)
    let title = document.createElement('h1')
    title.innerHTML = 'RSS Виртуальная клавиатура'
    title.className = 'title'
    container.appendChild(title)
    let text = document.createElement('textarea')
    text.className = 'textarea'
    container.appendChild(text)
    let keysContainer = document.createElement('div')
    keysContainer.className = 'keyscontainer'
    container.appendChild(keysContainer)
    for(let i = 0; i < rowsE.length;i++){
        let row = document.createElement('div')
        row.className = 'row'
        keysContainer.appendChild(row)
        for(let j = 0; j < rowsE[i].length;j++){
            let key = document.createElement('div')
            key.className = 'key'
            row.appendChild(key)
            let divE = document.createElement('div')
            divE.className = 'eng'
            key.appendChild(divE)
            for(let k = 0; k < 2;k++){
                let span = document.createElement('span')
                if(k == 0){
                    span.className = 'casedown active'
                }else if(k == 1){
                    span.className = 'caseup'
                }
                span.innerHTML = rowsE[i][j][k]
                if(span.innerHTML == ('Backspace') || span.innerHTML == ('Del') || span.innerHTML == ('Tab')|| span.innerHTML == ('CapsLock') || span.innerHTML == ('Enter') || span.innerHTML == ('Shift') || span.innerHTML == ('Ctrl') || span.innerHTML == ('Alt')|| span.innerHTML == ('Win') || span.innerHTML == ('')  || span.innerHTML == ('▲')|| span.innerHTML == ('◄')|| span.innerHTML == ('▼')|| span.innerHTML == ('►')){
                    span.classList.add('black')
                }
                if(span.innerHTML == ('Shift') || span.innerHTML == ('Ctrl') || span.innerHTML == ('Alt')|| span.innerHTML == ('Win') ){
                    span.classList.add(rowsE[i][j][2])
                }
                if(span.innerHTML == ('')){
                    span.classList.add('Space')
                }
                divE.appendChild(span)
            }
            let divR = document.createElement('div')
            divR.className = 'rus'
            if(rus == 'true'){
                divR.classList.add('activeL')
            }else if(rus == 'false'){
                divE.classList.add('activeL')
            }
            key.appendChild(divR)
            for(let k = 0; k < 2;k++){
                let span = document.createElement('span')
                if(k == 0){
                    span.className = 'casedown active'
                }else if(k == 1){
                    span.className = 'caseup'
                }
                span.innerHTML = rowsR[i][j][k]
                if(span.innerHTML == ('Backspace') || span.innerHTML == ('Del') || span.innerHTML == ('Tab')|| span.innerHTML == ('CapsLock') || span.innerHTML == ('Enter') || span.innerHTML == ('Shift') || span.innerHTML == ('Ctrl') || span.innerHTML == ('Alt')|| span.innerHTML == ('Win') || span.innerHTML == ('')  || span.innerHTML == ('▲')|| span.innerHTML == ('◄')|| span.innerHTML == ('▼')|| span.innerHTML == ('►')){
                    span.classList.add('black')
                }
                if(span.innerHTML == ('Shift') || span.innerHTML == ('Ctrl') || span.innerHTML == ('Alt')|| span.innerHTML == ('Win') ){
                    span.classList.add(rowsE[i][j][2])
                }
                if(span.innerHTML == ('')){
                    span.classList.add('Space')
                }
                divR.appendChild(span)
            }
        
            key.querySelectorAll('div').forEach((key)=>{
                key.addEventListener('mousedown',()=>{
                    if(key.querySelector('.active').innerHTML != 'CapsLock'){
                     key.querySelector('.active').classList.add('pressed')
                    }else{
                         key.querySelector('.active').classList.toggle('pressed')
                 }
                })
                key.addEventListener('mouseup',()=>{
                 if(key.querySelector('.active').innerHTML != 'CapsLock'){
                     key.querySelector('.active').classList.remove('pressed')
                 }
             })
                key.addEventListener('click',function(e){
                    textarea.focus()
                    if(key.querySelector('.active').innerHTML != 'Backspace' && key.querySelector('.active').innerHTML != 'Tab'  && key.querySelector('.active').innerHTML != 'Del' && key.querySelector('.active').innerHTML != 'CapsLock' && key.querySelector('.active').innerHTML != 'Enter' && key.querySelector('.active').innerHTML != 'Shift' && key.querySelector('.active').innerHTML != 'Alt' && key.querySelector('.active').innerHTML != 'Win' && key.querySelector('.active').innerHTML != 'Ctrl'&& key.querySelector('.active').innerHTML != '' && key.querySelector('.active').innerHTML != '&amp;' && key.querySelector('.active').innerHTML != '&lt;' && key.querySelector('.active').innerHTML != '&gt;'){
                         textarea.value+= key.querySelector('.active').innerHTML
                    }
                    if(key.querySelector('.active').innerHTML == 'Backspace'){
                        let t = textarea.selectionStart
                        textarea.value = textarea.value.replace(textarea.value[textarea.selectionStart-1],'')
                        textarea.selectionStart = t - 1
                        textarea.selectionEnd = t - 1
                    }
                    if(key.querySelector('.active').innerHTML == 'Enter'){
                     textarea.value += "\n"
                    }
                    if(key.querySelector('.active').innerHTML == 'CapsLock'){
                         document.querySelectorAll('.casedown').forEach((el)=>{
                             if(String(el.innerHTML).match(/^[a-zа-яё]+$/i) && el.innerHTML.length < 2){
                                 el.classList.toggle('active')
                             }
                         })
                         document.querySelectorAll('.caseup').forEach((el)=>{
                             if(String(el.innerHTML).match(/^[a-zа-яё]+$/i) && el.innerHTML.length < 2){
                                 el.classList.toggle('active')
                             }
                         })
                         if(caps == 'true'){
                             caps = 'false'
                         }else if(caps == 'false'){
                             caps = 'true'
                         }
                         
                    }
                    if(key.querySelector('.active').innerHTML == 'Tab'){
                         textarea.value += '   '
                     }
                     if(key.querySelector('.active').innerHTML == 'Del'){
                         let t = textarea.selectionStart
                        textarea.value = textarea.value.replace(textarea.value[textarea.selectionStart],'')
                        textarea.selectionStart = t
                        textarea.selectionEnd = t 
                      }
                     if(key.querySelector('.active').innerHTML == ''){
                         textarea.value +=' '
                     }
                     if(key.querySelector('.active').innerHTML == '&amp;'){
                         textarea.value +='&'
                     }
                     if(key.querySelector('.active').innerHTML == '&lt;'){
                         textarea.value +='<'
                     }
                     if(key.querySelector('.active').innerHTML == '&gt;'){
                         textarea.value +='>'
                     }
                 })
            })
        }
    }
}
createElements()
let textarea = document.querySelector('.textarea')
body.addEventListener('keydown',function(e){
    let btns = document.querySelectorAll('.active')
    if(e.which == 18 && (e.ctrlKey)){
        document.querySelectorAll('.eng').forEach((el)=>{
            el.classList.toggle('activeL')
        })
        document.querySelectorAll('.rus').forEach((el)=>{
            el.classList.toggle('activeL')
        })
        if(rus == 'true'){
            rus = 'false'
        }else if(rus == 'false'){
            rus = 'true'
        }
    }
    if(caps == 'true' && e.which > 64 && e.which < 91 && rus == 'false'){
        e.preventDefault()
        textarea.value += e.key.toUpperCase()
    }
    if((rus == 'true' && caps == 'false')&& (e.which > 64 && e.which < 91 || e.which == 192)){
        e.preventDefault()
        document.querySelectorAll('.key').forEach((el)=>{
            el.querySelectorAll('.eng').forEach((v,i)=>{
                if(v.querySelector('.active').innerHTML == e.key){
                  textarea.value += el.querySelector('.rus').querySelector('.active').innerHTML
                  el.querySelector('.rus').querySelector('.active').classList.add('pressed')
                }
            })
        })
    }
    if((rus == 'true' && caps == 'true')&& (e.which > 64 && e.which < 91 || e.which == 192)){
        e.preventDefault()
        document.querySelectorAll('.key').forEach((el)=>{
            el.querySelectorAll('.eng').forEach((v,i)=>{
                if(v.querySelector('.active').innerHTML == e.key){
                  textarea.value += el.querySelector('.rus').querySelector('.active').innerHTML.toUpperCase()
                  el.querySelector('.rus').querySelector('.active').classList.add('pressed')
                }
            })
        })
    }
    if(String(e.key) == 'Tab'){
        e.preventDefault()
            textarea.value += '   '
        }
    if(String(e.key) == 'Alt'){
        e.preventDefault()
    }
    if(String(e.key) == 'Shift'){
        document.querySelectorAll('.casedown').forEach((el)=>{
            if( el.innerHTML.length < 2){
                el.classList.toggle('active')
            }
        })
        document.querySelectorAll('.caseup').forEach((el)=>{
            if( el.innerHTML.length < 2 || el.innerHTML == '&amp;' || el.innerHTML == '&lt;' || el.innerHTML == '&gt;'){
                el.classList.toggle('active')
            }
        })
    }
    if(String(e.key) == 'CapsLock'){
            if (!allowed) return;
            allowed = false;
            document.querySelectorAll('.casedown').forEach((el)=>{
                if(String(el.innerHTML).match(/^[a-zа-яё]+$/i) && el.innerHTML.length < 2){
                    el.classList.toggle('active')
                }
            })
            document.querySelectorAll('.caseup').forEach((el)=>{
                if(String(el.innerHTML).match(/^[a-zа-яё]+$/i) && el.innerHTML.length < 2){
                    el.classList.toggle('active')
                }
            })
            if(caps == 'true'){
                caps = 'false'
            }else if(caps == 'false'){
                caps = 'true'
            }
    }
    if(e.key == 'ArrowLeft'){
        e.preventDefault()
        textarea.value += '◄'
        btns.forEach((el)=>{
            if(el.innerHTML == '◄'){
                el.classList.add('pressed')
            }
        })
    }
    if(e.key == 'ArrowRight'){
        e.preventDefault()
        textarea.value += '►'
        btns.forEach((el)=>{
            if(el.innerHTML == '►'){
                el.classList.add('pressed')
            }
        })
    }
    if(e.key == 'ArrowDown'){
        e.preventDefault()
        textarea.value += '▼'
        btns.forEach((el)=>{
            if(el.innerHTML == '▼'){
                el.classList.add('pressed')
            }
        })
    }
    if(e.key == 'ArrowUp'){
        e.preventDefault()
        textarea.value += '▲'
        btns.forEach((el)=>{
            if(el.innerHTML == '▲'){
                el.classList.add('pressed')
            }
        })
    }
    btns.forEach((el)=>{
        if(el.innerHTML != 'CapsLock' && el.innerHTML == String(e.key) && el.innerHTML != 'Shift' && el.innerHTML != 'Alt'){
            el.classList.add('pressed')
        }else if(e.key == 'CapsLock' && el.innerHTML == String(e.key)){
            el.classList.toggle('pressed')
        }else if(e.code == el.classList[3]){
            el.classList.add('pressed')
        }
})})
body.addEventListener('keyup',function(e){
    let btns = document.querySelectorAll('.active')
    if(e.key == 'ArrowLeft'){
        e.preventDefault()
        btns.forEach((el)=>{
            if(el.innerHTML == '◄'){
                el.classList.remove('pressed')
            }
        })
    }
    if(e.key == 'ArrowRight'){
        e.preventDefault()
        btns.forEach((el)=>{
            if(el.innerHTML == '►'){
                el.classList.remove('pressed')
            }
        })
    }
    if(e.key == 'ArrowDown'){
        e.preventDefault()
        btns.forEach((el)=>{
            if(el.innerHTML == '▼'){
                el.classList.remove('pressed')
            }
        })
    }
    if(e.key == 'ArrowUp'){
        e.preventDefault()
        btns.forEach((el)=>{
            if(el.innerHTML == '▲'){
                el.classList.remove('pressed')
            }
        })
    }
    if((rus == 'true' && caps == 'false')&& (e.which > 64 && e.which < 91 || e.which == 192)){
        e.preventDefault()
        document.querySelectorAll('.key').forEach((el)=>{
            el.querySelectorAll('.eng').forEach((v,i)=>{
                if(v.querySelector('.active').innerHTML == e.key){
                  el.querySelector('.rus').querySelector('.active').classList.remove('pressed')
                }
            })
        })
    }
    if((rus == 'true' && caps == 'true')&& (e.which > 64 && e.which < 91 || e.which == 192)){
        e.preventDefault()
        document.querySelectorAll('.key').forEach((el)=>{
            el.querySelectorAll('.eng').forEach((v,i)=>{
                if(v.querySelector('.active').innerHTML == e.key){
                  el.querySelector('.rus').querySelector('.active').classList.remove('pressed')
                }
            })
        })
    }
    if(String(e.key) == 'Shift'){
        document.querySelectorAll('.casedown').forEach((el)=>{
            if( el.innerHTML.length < 2){
                el.classList.toggle('active')
            }
        })
        document.querySelectorAll('.caseup').forEach((el)=>{
            if( el.innerHTML.length < 2 || el.innerHTML == '&amp;' || el.innerHTML == '&lt;' || el.innerHTML == '&gt;'){
                el.classList.toggle('active')
            }
        })
    }
    if(String(e.key) == 'Tab'){
        e.preventDefault()
    }
    if(String(e.code) == 'AltLeft'){
        e.preventDefault()
    }
    if(String(e.key) == 'CapsLock'){
        allowed = true;
    }
    btns.forEach((el)=>{
    if(el.innerHTML != 'CapsLock' && el.innerHTML != 'Shift' && el.innerHTML == String(e.key)  && el.innerHTML != 'Alt'){
            el.classList.remove('pressed')
    }else if(e.code == el.classList[3]){
            el.classList.remove('pressed')
    }
 })})
 function setLocalStorage() {
    localStorage.setItem('rus', rus);
 }
  window.addEventListener('beforeunload', setLocalStorage)

 

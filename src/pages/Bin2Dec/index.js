import React , {useState, setState} from 'react'
import './index.css'

export default function Bin2Dec(){
    
    function convert(){
        const binary = document.getElementById('b-input').value
        if (binary == ''){
            return alert('Por favor digita um número binário')
        }
        else{
            binary.split('').map((caractere)=> {
                if (caractere !== '0' && caractere !== '1'){
                    return alert('Digite um número binário')
                }
            })
            const decimal = parseInt(binary , 2)
            document.getElementById('d-input').value = decimal   
        }
        return true
    }   
    
    function clean(){
        if (document.getElementById('b-input').value !== ''){
            document.getElementById('b-input').value = ''
            document.getElementById('d-input').value = ''
        } 
    }


    return (

        <div className='container'> 
            <h1 id='titulo' >Bin2Dec</h1> 
            <h3> Conversor de números binários </h3>
            <p> 
                Binário: <input type='text' id='b-input' placeholder='Digite o número binário'></input>
            </p>

            <p> 
                Decimal: <input type='text' id='d-input' readOnly></input>
            </p>
            
            <p>
                <input type='button' value='Convert' onClick={convert}></input>
                <input type='button' value='Clean' onClick={clean}></input>
            </p>

        </div>
    )
}

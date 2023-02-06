class Photographer {
    constructor(data) {        
        this.id = data.id
        this.name = data.name
        this.city = data.city
        this.country = data.country
        this.tagline = data.tagline
        this.portrait = data.portrait
        this.price = data.price
    }


    makeDOM = () => {

        let nameProfil = document.getElementsByClassName('nameProfil')
        let locationProfil = document.getElementsByClassName('locationProfil')
        let taglineProfil = document.getElementsByClassName('taglineProfil')
    
        nameProfil[0].textContent = this.name
        locationProfil[0].textContent = `${this.city}, ${this.country}`
        taglineProfil[0].textContent = this.tagline
   
    }

    makeInfosbar = () => {
        let root = document.getElementById('root')

        let infosbar = document.createElement('div')
        infosbar.classList.add('infosbar')
        infosbar.classList.add('bg-infosBarBg')
        infosbar.classList.add('text-lg')
        infosbar.classList.add('font-semibold')
        infosbar.classList.add('shadow-md')
        infosbar.classList.add('rounded-t')
        infosbar.setAttribute('tabIndex', '-1')
        root.parentNode.insertBefore(infosbar, root)
    }
}

export default Photographer
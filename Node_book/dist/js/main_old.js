window.onload = () => {
    let scrollpos = window.scrollY
    const about = document.querySelector("#about > div")
    const dev = document.querySelector("#dev > div")
    const cv = document.querySelector("#cv > div")

    const add_class_on_scroll = (dom) => dom.classList.add("come-in")
    window.addEventListener( 'scroll', function() {
        scrollpos = window.scrollY
        if(scrollpos >= about.offsetHeight - 200) add_class_on_scroll(about)

        if(scrollpos >= dev.offsetHeight + 300) add_class_on_scroll(dev)

        if(scrollpos >= dev.offsetHeight + 700) add_class_on_scroll(cv)
        
    }) // end scroll

} // end onload
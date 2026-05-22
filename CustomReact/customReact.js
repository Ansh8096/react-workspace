function customRender(reactElement,container){
    /* const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    
    container.appendChild(domElement)
    */

    // version 2:- (using the for loop for attributes)
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

var reactElement = {
    type : 'a',
    props: {
        href : 'https://github.com/Ansh8096',
        target : '_blank'
    },
    children: 'Click me to visit github'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer);
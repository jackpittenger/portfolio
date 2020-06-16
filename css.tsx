export default () =>
`
* {
    font-family: Helvetica;
}

body {
    margin: 0;
}

.section {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    
}

.section-home {
    background-color: #262626;
    height: calc(var(--vh, 1vh) * 100);
    // position: absolute;
    top: 0;
    left: 0;
}

.section-skills {
    height: calc(var(--vh, 1vh) * 100);
    background-color: #3D3837;
}

.section-portfolio {
    height: calc(var(--vh, 1vh) * 100);
    background-color: #332F2E;
}

.section-contact {
    background-color: #3D373A;
    height: calc(var(--vh, 1vh) * 100);
}



`
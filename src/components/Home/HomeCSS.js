import styled from 'styled-components';

export const Container = styled.div`
.home{
  background: white;
}
.container-home{
  opacity: 0;
  animation: animatePage 500ms forwards;
  // background: rgba(59, 88, 152, 0.7);
  // background: black;
  position: absolute; top: 60px;
  overflow: hidden;


  &::before{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: url(${props => props.background}) repeat;
  }

  &__hero{
    clip-path: polygon(0 0, 100% 0, 100% 80%, 70% 80%, 50% 90%, 30% 80%, 0 80%);

    &--img{
      width: 100%;
      height: 92vh;
      img{
        filter: saturate(1.35); 
        width: 100%; height: 100%;
        object-fit: cover;
        object-position: 50% 30%;
      }
    }

    &--para{
      text-align: center;
      position: absolute;
      top: 15%; left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      max-width: 600px;

      p{
        font-family: $ff-Marck;
        color: white;
        font-size: 1.55rem;
        &::after{
          content: '';
          display: block;
          margin: 0 auto;
          position: absolute; 
          bottom: -100%; left: 50%;
          transform: translateX(-50%);
          height: 2px;
          width: 80px;
          // background: white;
          // border-bottom: 2px dashed white;

          @media (max-width: 1197px){bottom: -40%;}
        }
      }
      @media (max-width: 660px){
        padding: 0 10px;
        top: 10%;
        max-width: unset;
        width: 100%;
        p::after{
          bottom: -50%;
        }
      }
     
    }
  }

  &__experience{
    text-align: center;
    margin-top: -50px;
    
    span{
      font-family: $ff-Russo;
      color: black;
      position: relative;
      &::before, &::after{
        content: '';
        display: block;
        width: 20px;
        height: 3px;
        // background: black;
        margin: 0 auto;
      }
      &::before{
        position: absolute; top: 50%; left: -30px;
        transform: translateY(-50%);
      }
      &::after{
        position: absolute; top: 50%; right: -30px;
        transform: translateY(-50%);
      }
    }
  }

  &__skill-icons{
    width: 80%;
    margin: 50px auto 0;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    // each skill block
    .skill-block-parent{
      transition: all 300ms ease;
      perspective: 500px;
      .icon-container{
     
        transform: rotateY(-360deg);
        transform-origin:center top; 
        
        opacity: 0;
        //transform: translateY(100px);
        
        z-index: 2;
        width: 100px;
        height: 100px;
        // overflow: hidden;
        text-align: center;
        margin: 15px 10px;
        background: black;
        border: 1px solid white;
        i{  
          color: white;
          font-size: 68px;
          line-height: 100px;
        }
        .desc{
          background: rgba(105, 105, 105, 0.87);
          // color: #fff;
          font-family: $ff-Russo;
        }
      }

      &:hover{
        cursor: pointer;
        transform: translateY(-8px);
        transition: transform 300ms ease;
      }
    }

    .shadow{
      transition: all 300ms ease;
      position: relative;
      &::after{
        content:'';
        opacity: 0;
        transition: all 300ms ease;
        animation: shadow 1s forwards;
        width: 90px;
        height: 3px;
        position: absolute;
        bottom: -16px; left: 50%;
        transform: translateX(-50%);
        filter: blur(3px);
        background: black;
        position: absolute;
      }
    }
    @keyframes shadow{
      0%{
      
      }
      100%{
        opacity: 0.7;
      }
    }
    .skill-block-parent:nth-child(1) .icon-container{ i{ color: yellow; } }
    .skill-block-parent:nth-child(2) .icon-container{ i{ color: #4DD0E1; } }
    .skill-block-parent:nth-child(3) .icon-container{ i{color: #cf649a;} }
    .skill-block-parent:nth-child(4) .icon-container{ i{color: hsl(0, 95%, 57%);} }
    .skill-block-parent:nth-child(5) .icon-container{ i{color: #fff;} }
    .skill-block-parent:nth-child(6) .icon-container{ i{color: #e44f26;} }
    .skill-block-parent:nth-child(7) .icon-container{ i{color: #6f43a4;} }
    .skill-block-parent:nth-child(8) .icon-container{ 
      i{color: #19e634;}
      .desc{letter-spacing: -1px;}
    }
    .skill-block-parent:nth-child(9) .icon-container{ 
      img {
        object-fit: cover; 
        height: 98%;
        margin-top: 4px;
      }
    }

  }

   // skill blocks animation [ icon-container class ]
  @keyframes animation-icon-block{
    0%{
      opacity: 0;
      transform: rotateY(-360deg);
    }

    100%{
      opacity: 1; 
      transform: rotateY(0deg);
    }
  }


}

`;
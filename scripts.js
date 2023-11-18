let imgIndex = 1;
showImg(imgIndex);

function nextImg(n)
{
  showImg(imgIndex=imgIndex+n);
}

function prevImg(n)
{
  showImg(imgIndex=imgIndex+ n);
}
function showImg(n) {
  let i;
  let Images = document.getElementsByClassName("myImages");
  if (n > Images.length) 
  {
    imgIndex = 1;
  }    
  else if (n < 1) 
  {
    imgIndex = Images.length;
  }else
  {
    imgIndex =n;
  }
  for (i = 0; i < Images.length; i++) 
  {
    Images[i].style.display = "none";  
  }
  Images[imgIndex-1].style.display = "block";  
 
}

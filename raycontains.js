function raycontains(rayIntersects, meshName) {
  // rayIntersects: Threejs Raycaster intersect array [Array]
  // meshName: Given name of scene mesh [String]
  var rayItemName;
  var meshInRay = false;

  rayIntersects.every((item,i) => {
    rayItemName = item.object.name;
    if(rayItemName == meshName){
      meshInRay = true;
      return false;
    }else{
      return true;
    }
  });

  return meshInRay;
}

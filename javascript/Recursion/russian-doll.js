// We have lots of Russian Dolls, inside the last Russian Doll is some chocolate. We don't know how many Russian Dolls we must open until we find the chocolate. So this would be an ideal task for recursion.

function processDoll(doll)
{
  // 1) Base case
  if( found the peice of chocolate )
    return "Yum yum"
  // 2) Recursive call to itself
  else if( there are no more dolls )
  return "No chocolate here :("
  else
    processDoll(the smaller doll)
}
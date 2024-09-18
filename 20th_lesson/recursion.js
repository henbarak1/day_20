//ex1
function countPartyMembers(members){
    return countPartyMembersHelp(members,members.length);
}
function countPartyMembersHelp(members,index)
{
    if(index == 0)
    {
        return 0;
    }
    return 1 + countPartyMembersHelp(members,index - 1);
}
//ex2
function findCharacterByName(parties,charecter)
{
   return findCharacterByNameHelp(parties,charecter,0)
}
function findCharacterByNameHelp(parties,charecter,index)
{
    if(index > parties.length - 2)
    {
        return false;
    }

    return parties[index].includes(charecter) || findCharacterByName(parties,charecter,index + 1);
}

//ex3 
function TotalDamageDealt(damage)
{
    return TotalDamageDealtHelp(damage,damage.length-1)
}
function TotalDamageDealtHelp(damage,index)
{
    if(index === 0)
    {
        return damage[0];
    }
    return damage[index] + TotalDamageDealtHelp(damage,index - 1);
}
//ex4
function FindStrongestAttack(damages)
{
   return FindStrongestAttackHelp(damages,damages.length-1);
}
function FindStrongestAttackHelp(damages,index)
{
    if(index ==  0)
    {
        return damages[0];
    }
    return Math.max(FindStrongestAttackHelp(damages,index-1), damages[index]);
}

//ex5
function CalculateAverageHealth(healthVals)
{
    return CalculateAverageHealthHelp(healthVals,healthVals.length)
}
function CalculateAverageHealthHelp(healthVals,numVals)
{
    if(healthVals.length === numVals)
    {
        return damage[numVals]/healthVals.length;
    }
    return damage[index]/healthVals.length + CalculateAverageHealthHelp(members,index - 1);
}
//ex6
function ListAllInventoryItems(arr)
{
    return ListAllInventoryItemsHelp1(arr,0,[])
}
function ListAllInventoryItemsHelp1(arr,index,ret)
{
    if (index < arr.length)
        {
           ret = (ret.concat(ListAllInventoryItemsHelp2(arr,index++,ret)));
           return ListAllInventoryItemsHelp1(arr,index++,ret);
        } 
        return ret;
}
function ListAllInventoryItemsHelp2(arr,index,ret)
{
    
    if(index <= arr.length-1)
    {
        return arr[index];
    }
    
    return (ret.concat(ListAllInventoryItemsHelp2(arr[index++],index++,ret)));
    
}

//ex7

function FindCharacterbyRole(arr,role)
{
    const ret = []
    return FindCharacterbyRoleHelp(arr,0,role,ret);
}

function FindCharacterbyRoleHelp(arr,index,role,ret)
{
    if(index == arr.length - 1)
    {
        return ret;
    }
    if (arr[index].role === role && index <arr.length-1 )
    {
        console.log(arr[index].role+" "+arr[index].name)
        ret.push(arr[index].name+"");

        return FindCharacterbyRoleHelp(arr,index+1,role,ret)
    }
    
}
//ex8
function CalculateTotalExperiencePoints(arr)
{
    return CalculateTotalExperiencePointsHelp(arr,arr.length-1);
}

function CalculateTotalExperiencePointsHelp(arr,index)
{
    if( index <0 ||index >= arr.length)
    {
        return 0;
    }
    return (arr[index].xp + CalculateTotalExperiencePointsHelp(arr,index-1));
}
//ex9
function findHighestLevelCharechter(arr)
{
   return findHighestLevelCharechterHelp(arr,arr.length-1)
}

function findHighestLevelCharechterHelp(arr,index)
{
    if(index <= 0 ||index> arr.length -1 )
        {
           return 0;
        }
         let max1 = Math.max(arr[index].level,arr[index-1].level);
         return Math.max(max1,findHighestLevelCharechterHelp(arr,index-1))

}
//ex10
function CountCharactersbyRole(arr,role)
{
    return (FindCharacterbyRole(arr,role)).length;
}
//ex11
function FindCharacterwithShortestName(arr)
{
    return FindCharacterwithShortestNameHelp(arr,0,[])
}

function FindCharacterwithShortestNameHelp(arr,index,ret)
{
    if(index == arr.length-1)
    {
        return "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" ;
    }
    if(arr[index].length > arr[index+1].length)
    {
        ret = []
       ret.push(arr[index+1])
        index++
        FindCharacterwithShortestNameHelp(arr,index,ret);
    }
    else
    {
        index++;
    }
        

}
//ex12
function FilterCharactersbyMinimumLevel(arr,min)
{
   return FilterCharactersbyMinimumLevelHelp(arr,min,0,[])
}

function FilterCharactersbyMinimumLevelHelp(arr,min,index,ret)
{
    if(index >= arr.length-1)
    {
        return ret;
    }
    if(arr[index][level]>= min)
    {
        ret.push(arr[index]);
    }
    return FilterCharactersbyMinimumLevelHelp(arr,min,index++,ret)
}

//ex13
function FindCharacterwithMostSkills(arr)
{
 return FindCharacterwithMostSkillsHelp(arr,0,[])
}

function FindCharacterwithMostSkillsHelp(arr,index,ret)
{
    if(index >= arr.length-1)
        {
            return ret;
        }
        if(arr[index][skills]> ret[0])
            {
                ret[0]= arr[index][skills];
            }
            return FindCharacterwithMostSkillsHelp(arr,index+1,ret);

}
//ex14
function FlattenPartyInventory(arr)
{
    let ret = FlattenPartyInventoryHelp1(arr,0,[]);
    return ret.slice(0,ret.length/2);
}
function FlattenPartyInventoryHelp1(arr,index,ret)
{
    if (index > arr.length - 1)
    {
        return ret
    }
    return FlattenPartyInventoryHelp2(arr,index,ret).concat(FlattenPartyInventoryHelp2(arr,index+1,ret));
}
function FlattenPartyInventoryHelp2(arr,index,ret)
{   
    if(index > arr.length - 1)
    {
        return ret
    }
    if(typeof(arr[index])=='string')
    {
        ret.push(arr[index])
        return FlattenPartyInventoryHelp2(arr,index+1,ret);//all elements inside curr array

        
    }
    return FlattenPartyInventoryHelp2(arr[index],0,ret);//all elements inside nested array
}

// console.log(ListAllInventoryItems([['Sword', 'Shield'], ['Potion', 'Armor'], ['Bow']]));
console.log(CountCharactersbyRole([{name: 'Warrior', role: 'Tank'}, {name: 'Mage',
    role: 'DPS'}, {name: 'Rogue', role: 'DPS'}], 'DPS'))
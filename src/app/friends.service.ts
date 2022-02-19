import { Injectable } from "@angular/core";

@Injectable()
export class FriendsService {
    friendsArray = [
        {name: 'smokerfire'},
        {name: 'tubepower'},
        {name: 'multishotcoalore'},
        {name: 'spawnfoot'},
        {name: 'bearsnowball'},
        {name: 'bowlog'},
        {name: 'craftingpigstep'},
        {name: 'chorussmite'},
        {name: 'lavasaddle'},
        {name: 'porkchopforest'},
        {name: 'valleypot'},
        {name: 'portalprismarine'},
        {name: 'nautilusblaze'},
        {name: 'poppyprojectile'},
        {name: 'pillagersnow'},
        {name: 'farmlandriptide'},
        {name: 'dioritecyandye'},
        {name: 'impalingboots'},
        {name: 'carrotlime'},
        {name: 'flamebinding'},
        {name: 'basaltmellohi'},
        {name: 'coalorestone'},
        {name: 'ominousgilded'},
        {name: 'spectraltrapdoor'},
        {name: 'framesmoker'},
        {name: 'lodestonecookie'},
        {name: 'smallsand'},
        {name: 'lecternvanishing'},
        {name: 'rottendiorite'},
        {name: 'bakedcyan'},
        {name:'conduititem'},
        {name:'jukeboxfox'},
        {name:'loyaltytree'},
        {name:'grassguardian'},
        {name:'brownpattern'},
        {name:'potgranite'},
        {name:'tablepurpur'},
        {name:'packedcrystals'},
        {name:'flintbarrier'},
        {name:'seagrassbeehives'},
        {name:'tundrasticky'},
        {name:'powerstaned'},
        {name:'alliumweeping'},
        {name:'dirtlukewarm'},
        {name:'fanhoglin'},
        {name:'muttonpufferfish'},
        {name:'blackstoneslime'},
        {name:'cocoaegg'},
        {name:'cubefortress'},
        {name:'glazedbee'}
    ]

    gamesArray = [
        {
          name: 'Doom Ethernal', 
          price: '200 UAH', 
          description: 'Hell`s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.',
          tag: 'Action'
        },
        {
          name: 'Warfare 1944',
          price: '150 UAH',
          description: 'Warfare 1944 is a free strategy war game based on the Battle of Normandy. Join the fight in this historic battle between Germany and Britain. Use your units wisely and control their every move.',
          tag: 'Strategy'
        },
        {
          name: 'Forge of Empires',
          price: '180 UAH',
          description: 'No Empire happens by accident. It requires generations of planning, struggle, sacrifice, work, and pain. Build your own empire the way you see it!',
          tag: 'Strategy'
        },
        {
          name: 'Tower Defence',
          price: '150 UAH',
          description: 'Tower Defence is a free Tower Defence game. We all love towers, we all love defending things. Now with the new game you can put your love of defense and towers together and defend a tower.',
          tag: 'Strategy'
        },
        {
          name: 'Artifission',
          price: '180 UAH',
          description: 'You are the protector with a big sword. Use it in a big way. Can you defeat the enemy in the name of the United Nations?',
          tag: 'Action'
        },
        {
          name: 'Fatal Puzzle',
          price: '200 UAH',
          description: 'The man with the black hat is wanted, and you`re the only one who can take him down. For some reason you have to do it with a boulder.',
          tag: 'Action'
        },
        {
          name: 'Danger Dungeon',
          price: '150 UAH',
          description: 'Head underground to rescue your peeps. Equip yourself with armor, weapons and spells, because you will be fighting ghouls, minotaurs, skeletons, orcs and more!',
          tag: 'Zombie'
        },
        {
          name: 'Undead Throne',
          price: '200 UAH',
          description: 'Rise from the dead and fight to the end! Every enemy you slay gives you resources, like gold, fingers, blood and dragon hearts. Use those resources to craft new weapons, armor and spells.',
          tag: 'Zombie'
        },
        {
          name: 'Zombie Buster',
          price: '180 UAH',
          description: 'What is a landlord`s worst nightmare? Zombies. Everyone knows that zombies make horrible tenants. Keep the zombies out of your buildings at all costs - your property values depend on it!',
          tag: 'Zombie'
        },
    ]
    myLibraryArray: any = []
    myFriendsBucket: any = [];
    // tagsFilter: any = [];
}
![Grid Chain Games | Grind Banner](https://github.com/ATrnd/GCG_GRIND/blob/main/_img/GCG_grind_bg_github_0.1.jpg?raw=true)

# Grid Chain Games (GCG) | Grind — Intro

Grind is the second element of the [GCG project](https://github.com/ATrnd/GridChainGames). All this started out something minimal, me playing with onchain security concepts & patterns demonstrated rapidly with JS. Over time, it turned into a "mission", building a small-scale library for:

1. onchain
2. community-driven
3. crypto games.

Currently, I'm working on micro-modules to solve fundamental problems in building web3 game economies. Modules (for now) designed to showcase & solve problems with vanilla JS, serving as blueprints/references for (educational and) actual onchain implementations (Solidity).

Think of it as a weird puzzle where we're kept in the dark about the final solution. Anything could work, but some solutions (patterns) are better than others. The challenge is to find/test/implement/iterate these patterns.

## What GCG Grind is about?

Grind is built from five separate modules.
Each module has its own goal and builds on existing functionality using the previous one(s) (if any).

## The problem of money:

So how do we make money?
Luckily, in games, we don't have to rely precisely on how "reality" works;
So, making money in GCG Grind is as simple as connecting to the dApp and claiming it by calling the Hack$ function.
If we'd had a background story (which we don't), I'd say we're playing the role of a Hacker who is sort of making money by Hacking stuff for people.

![Grid Chain Games | Grind Hack$ UI](https://github.com/ATrnd/GCG_GRIND/blob/main/_img/GCG_grind_hack$_0.1.jpg?raw=true)

### Features:
1. Crypto wallet: connection request simulation
2. Crypto wallet connection options: cancel, connect
3. Hack dollars function
4. Crypto wallet: signature request simulation
5. Crypto wallet signature options: cancel, sign

### Progress: Completed
*Demo URL*: [Grid Chain Games Grind | Hack$ Demo](https://atrnd.github.io/GCG_GRIND_demo/mods/hacks_mod/index.html)

<hr>

## The problem of spending:

We're pretty good now, right? We have all the money we need, and we can claim it forever and stack it in our almost limitless unit.
But it gets boring, doesn't it? Also, if we want a working economy, we must find a way not just to make money but to spend it. So, Grind's second objective is to create a way for our Magnificent Hackers to spend their in-game money, and that's achieved by introducing the "Machine Store."

Hell yeah, after all, we're computer geeks, aren't we? Of course, there is no art to indicate that we're actually dealing with anything you may think of as a machine. We're just having letters (apologies?). Letters indicate "parts" of machines, and each user must collect these parts to make their machine "Work." So, in a nutshell, we have a way to make money, and now we can spend it. We created an infinite loop, but something is still missing.

![Grid Chain Games | Grind Machine UI](https://github.com/ATrnd/GCG_GRIND/blob/main/_img/GCG_grind_machine_UI_0.1.jpg?raw=true)
![Grid Chain Games | Grind Machine Store UI](https://github.com/ATrnd/GCG_GRIND/blob/main/_img/GCG_grind_machine-store_UI_0.1.jpg?raw=true)

### Features:
1. Hack$ UI features +
2. Machine UI
3. Machine Store UI
4. Machine Element Selection
5. Machine Upgrades

### Progress: Completed
*Demo URL*: [Grid Chain Games Grind | Machine Store Demo](https://atrnd.github.io/GCG_GRIND_demo/mods/store_mod/index.html)
<hr>

## The problem of complexity:

Well, we know how to make money, hitting "Hack$" hard, and we bought all the possible parts of our "letter-driven" machines.
What's next? Consider this: We might want to turn those machines on, but it turns out (sadly) that machines consume energy, and energy is something we need to purchase.

Our third objective is to introduce some difficulty to our game by adding the concept of an "Energy Store".
Energy serves as the first layer of "complexity" because while our machines are turned on and working, they consume energy, so we need to save money and keep feeding them; otherwise, they stop working.
Okay, all this leads us to the obvious question: What exactly do machines do when turned on?

![Grid Chain Games | Grind Energy UI](https://github.com/ATrnd/GCG_GRIND/blob/main/_img/GCG_grind_energy_UI_0.1.jpg?raw=true)
![Grid Chain Games | Grind Energy Store UI](https://github.com/ATrnd/GCG_GRIND/blob/main/_img/GCG_grind_energy_store_UI_0.1.jpg?raw=true)

### Features:
1. Hack$ UI features +
2. Machine UI features +
3. Energy Store UI
4. Energy Type Selection
5. Energy Upgrades

### Progress: Completed
*Demo URL*: [Grid Chain Games Grind | Energy Store Demo](https://atrnd.github.io/GCG_GRIND_demo/mods/energy_mod/index.html)
<hr>

## The problem of (in-game) value:

We've come a long road from aggressively hacking dollars to buy some pixels on screen, and it even turned out those pixels consume energy. Still, we're recklessly pushing the boundaries of this thing. After a few dozen of failed attempts bashing life into our machines by brute force, we decided to (meh) purchase some energy from this shady store (probably run by a centralized entity). And we're ready to go.

Our fourth objective is to add our "main element" to the game, which is the "act of Grinding" (*inspired by a Great Builder and friend from Backdrop Build v4*). Grinding is almost like mining some good old-fashioned crypto, trying to guess a random number (hard) with fancy hardware connected as the size of a Colosseum, causing blackouts all around the country, but it's virtual.

And indeed, history repeats itself, you might think. From terminals, we evolved to terminal emulators, and the same is about to happen in the crypto space. Some time ago, you needed hardware to mine stuff, and now we mimic that with dApps; weird, isn't it?

Anyway, mining serves as a layer of value the user creates in-game, which is vital for our economy.
Users can now,
1. make money
2. spend money
3. spend even more money (complexity)
4. create value
But we're not finished yet. We must convert that value to something meaningful: tokens, you whisper...

![Grid Chain Games | Grind UI](https://github.com/ATrnd/GCG_GRIND/blob/main/_img/GCG_grind_UI_0.1.jpg?raw=true)

### Features:
1. Hack$ UI features +
2. Machine UI features +
3. Energy UI features +
4. Virtual Crypto Selection Config
5. Virtual Crypto Grind
6. Virtual Crypto Claim

### Progress: Completed
*Demo URL*: [Grid Chain Games Grind | Grind Demo](https://atrnd.github.io/GCG_GRIND_demo/mods/grind_mod/index.html)

## The problem of (real world) value:

Our users mastered the game, they know how to Hack, purchased fancy (and somewhat abstract) machines, were forced into paying for energy (and felt bad about it), configured their machines to create in-game value for them in the shape of (you guessed it) abstract letters such as x,y,z representing some form of sub-crypto currency and now they're hungry for the next phase which where all the hard work pays off, and finally converts back to IRL world value right?

Not quite. There is a final decision to make, the big one. Do they want to:
1. play safe and withdraw, thus converting their stuff into an "IRL-token" (probably an ERC20) and re-start (slow).<br>
<hr>
OR
<hr>
2. re-invest in more powerful machines, thus converting their sub-crypto back to in-game currency, and take risks missing out on a reasonable price point for selling those juicy ERCs.
<br>

![Grid Chain Games | Convert Credit & Token UI](https://github.com/ATrnd/GCG_GRIND/blob/main/_img/GCG_grind_convert_credit_UI_0.1.jpg?raw=true)

### Features:
1. Hack$ UI features +
2. Machine UI features +
3. Energy UI features +
4. Virtual Crypto Selection Config +
5. Trade Virtual Crypto
5. Trade Tokens

### Progress: Completed
*Demo URL*: [Grid Chain Games Grind | Token Demo](https://atrnd.github.io/GCG_GRIND_demo/mods/token_mod/index.html)

## But why?

All this is below the layer of the everyday experience games associated with.
In a sense, all this is just an abstract structure without fancy toppings.
And you might think, well, I can't do anything with "just structure" I need something concrete.
And you're right; if you're looking for a well-outlined & fully built/validated/proven business model, GCG Grind is not your cup of tea.
On the other hand, structures can be re-used, tweaked, and implemented in many ways by dressing them up in different costumes.
So, all these seemingly rough sketches of concepts & ideas may turn out to be useful in many applications. Just the way it works in mathematics, some formulas are there, waiting to be discovered in another field of science.
And all this is just the beginning...

### Special thanks to:
**Eric S. Raymond** for the drive, keeps me pushing my limits.<br>
**Jesse Schell**, for crafting lenses, I can use to see what truly matters.<br>
**Joey DeBruin**, for the encouragement, support & inspiration for my Builds.<br>


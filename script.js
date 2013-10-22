console.log('Candybox Mod Initializing!')

var Mod = {
  system: {
    load: {
      script: function(src) {
        var script, parent;
        script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = src;
        parent = document.getElementsByTagName('head')[0];
        parent.appendChild(script);
        return script;
      },
      stylesheet: function(src) {
        var link, parent;
        link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = src;
        parent = document.getElementsByTagName('head')[0];
        parent.appendChild(link);
        return link;
      }
    },
    cookies: {
      create: function(name,value,days) {
        if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
      },
      read: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
      },
      erase: function(name) {
        createCookie(name,"",-1);
      }
    }
  },
  game: {
    data: function() {
      return {
        code: ((code === undefined || code == null || code.length == "") ? 0 : code),
        swordName: sword.name,
        swordSpecialSword: Number(sword.specialSword),
        swordSpecialPower: sword.specialPower,
        candiesNbrOwned: candies.nbrOwned,
        candiesNbrThrown: candies.nbrThrown,
        candiesNbrEaten: candies.nbrEaten,
        candiesNbrTotal: candies.nbrTotal,
        candiesCandiesPerSecond: candies.candiesPerSecond,
        candiesConverterActivated: Number(candiesConverter.activated),
        cauldronBookPage: cauldron.bookPage,
        cauldronCandies: cauldron.candiesInTheCauldron,
        cauldronLollipops: cauldron.lollipopsInTheCauldron,
        chocolateBarsNbrOwned: chocolateBars.nbrOwned,
        farmLollipopsPlanted: farm.lollipopsPlanted,
        farmCurrentFlagIndex: farm.currentFlagIndex,
        farmPlantingButtonsStep: farm.plantingButtonsStep,
        forgeStep: forge.step,
        shopLollipopsButtonsShown: Number(shop.buy10LollipopsButtonShown),
        shopShown: Number(shop.shown),
        shopTicklingStep: shop.ticklingStep,
        shopClickingOnLollipopStep: shop.clickingOnLollipopStep,
        hutStep: hut.step,
        hutSpeech: hut.speech,
        inventoryMagicianHatLetter: inventory.magicianHatLetter,
        lollipopsNbrOwned: lollipops.nbrOwned,
        lollipopsNbrInStock: lollipops.nbrInStock,
        lollipopsNbrBought: lollipops.nbrBought,
        mainNbrOfSecondsSinceLastMinInterval: main.nbrOfSecondsSinceLastMinInterval,
        mainNbrOfSecondsSinceLastHourInterval: main.nbrOfSecondsSinceLastHourInterval,
        mainNbrOfSecondsSinceLastDayInterval: main.nbrOfSecondsSinceLastDayInterval,
        mountGoblinBasicChestProbability: mountGoblin.basicChestProbability,
        peacefulForestBasicChestProbability: peacefulForest.basicChestProbability,
        peacefulForestPoniesEncountered: peacefulForest.poniesEncountered,
        objectsHaveObjectKey: Number(objects.list.key.have),
        objectsHaveObjectHutMap: Number(objects.list.hutMap.have),
        objectsHaveObjectWellMap: Number(objects.list.wellMap.have),
        objectsHaveObjectSwampMap: Number(objects.list.swampMap.have),
        objectsHaveObjectBoots: Number(objects.list.boots.have),
        objectsHaveObjectMagicianHat: Number(objects.list.magicianHat.have),
        objectsHaveObjectPinkRing: Number(objects.list.pinkRing.have),
        objectsHaveObjectForgeMap: Number(objects.list.forgeMap.have),
        objectsHaveObjectCandiesConverter: Number(objects.list.candiesConverter.have),
        objectsHaveObjectPlateArmour: Number(objects.list.plateArmour.have),
        objectsHaveObjectCauldron: Number(objects.list.cauldron.have),
        objectsHaveObjectMagicalHorn: Number(objects.list.magicalHorn.have),
        objectsHaveObjectHornOfPlenty: Number(objects.list.hornOfPlenty.have),
        objectsHaveObjectOldAmulet: Number(objects.list.oldAmulet.have),
        potionsShownHealth: Number(potions.list.health.shown),
        potionsShownEscape: Number(potions.list.escape.shown),
        potionsShownBerserk: Number(potions.list.berserk.shown),
        potionsShownFireScroll: Number(potions.list.fireScroll.shown),
        potionsShownAcidRainScroll: Number(potions.list.acidRainScroll.shown),
        potionsShownTeleportScroll: Number(potions.list.teleportScroll.shown),
        potionsShownEarthquakeScroll: Number(potions.list.earthquakeScroll.shown),
        potionsShownImpInvocationScroll: Number(potions.list.impInvocationScroll.shown),
        potionsShownMajorHealth: Number(potions.list.majorHealth.shown),
        potionsShownInvulnerability: Number(potions.list.invulnerability.shown),
        potionsShownTurtle: Number(potions.list.turtle.shown),
        potionsShownJelly: Number(potions.list.jelly.shown),
        potionsShownSeed: Number(potions.list.seed.shown),
        potionsShownCloning: Number(potions.list.cloning.shown),
        potionsShownSuperman: Number(potions.list.superman.shown),
        potionsShownGmooh: Number(potions.list.gmooh.shown),
        potionsNbrOwnedHealth: potions.list.health.nbrOwned,
        potionsNbrOwnedEscape: potions.list.escape.nbrOwned,
        potionsNbrOwnedBerserk: potions.list.berserk.nbrOwned,
        potionsNbrOwnedFireScroll: potions.list.fireScroll.nbrOwned,
        potionsNbrOwnedAcidRainScroll: potions.list.acidRainScroll.nbrOwned,
        potionsNbrOwnedTeleportScroll: potions.list.teleportScroll.nbrOwned,
        potionsNbrOwnedEarthquakeScroll: potions.list.earthquakeScroll.nbrOwned,
        potionsNbrOwnedImpInvocationScroll: potions.list.impInvocationScroll.nbrOwned,
        potionsNbrOwnedMajorHealth: potions.list.majorHealth.nbrOwned,
        potionsNbrOwnedInvulnerability: potions.list.invulnerability.nbrOwned,
        potionsNbrOwnedTurtle: potions.list.turtle.nbrOwned,
        potionsNbrOwnedJelly: potions.list.jelly.nbrOwned,
        potionsNbrOwnedSeed: potions.list.seed.nbrOwned,
        potionsNbrOwnedCloning: potions.list.cloning.nbrOwned,
        potionsNbrOwnedSuperman: potions.list.superman.nbrOwned,
        potionsNbrOwnedGmooh: potions.list.gmooh.nbrOwned,
        questMaxLandOrder: quest.maxLandOrder,
        questTiredTime: quest.tiredTime,
        spellsFasterCandiesFibo1: spells.fasterCandiesFiboPrev,
        spellsFasterCandiesFibo2: spells.fasterCandiesFiboCurr,
        swampStep: swamp.step,
        tabsAnimation: tabs.animation,
        wishingWellSpeech: wishingWell.speech,
        wishingWellStep: wishingWell.step,
        yourselfCanSurpass: Number(yourself.canSurpass),
        developperComputerWon: Number(developperComputer.won)
      }
    },
    save: function() {
      var button = $('#mod_save');
      $.post("scripts/save.php", Mod.game.data(), function(msg) {
        if (msg != "Erreur" && msg.substring(0,5) != "<br /") {
          code = msg.substring(0,5);
          Mod.system.cookies.create('session', code);
          button.css({backgroundColor: '#00bb00'}).animate({backgroundColor: '#ddd'}, 1000)
          console.log('['+new Date().toLocaleTimeString()+'] Game saved!')
        } else {
          alert("There was a problem while saving. Please try again later :/");    
          button.css({backgroundColor: '#ff0000'}).animate({backgroundColor: '#ddd'}, 1000)
          console.log('['+new Date().toLocaleTimeString()+'] Game save error!')
        }
      });
    },
    load: function() {
      var code = Mod.system.cookies.read('session');
      if (code) {
        window.location.href = "/index.php?pass=" + code
      } 
    },
    autosave: {
      interval: {
        id: null,
        loop: function() {
          Mod.game.save();
        },
        setUp: function() {
          $('#mod_autosave').on('change', function() {
            var that = $(this);
            if (that.prop('checked')) {
              Mod.game.save();
              Mod.game.autosave.interval.id = setInterval(Mod.game.autosave.interval.loop, 60*1000);
              localStorage.autosave = true;
            } else {
              clearInterval(Mod.game.autosave.interval.id);
              localStorage.autosave = false;
            }
          });
          if (localStorage.autosave) {
            $('#mod_autosave').click();
          }
        }
      }
    },
    setUp: function() {
      Mod.game.autosave.interval.setUp();
    }
  },
  top_bar: {
    interval: {
      id: null,
      loop: function() {
        var format = '0,0'
        Mod.top_bar.mod_candies.text(numeral(candies.nbrOwned).format(format));
        Mod.top_bar.mod_lollipops.text(numeral(lollipops.nbrOwned).format(format));

        if ($('#lollipop').css('visibility') != 'hidden') {
          $('.mod_lollipops').css({display: 'inline'})
        }

        if ($('#candies_converter').css('display') != 'none') {
          $('.mod_candy_converter').css({display: 'inline'})
        }

      },
      setUp: function() {
        Mod.top_bar.interval.id = window.setInterval(Mod.top_bar.interval.loop, 100);
      }
    },
    setUp: function () {
      var top_html = '';
      top_html += '<div class="mod_top_bar">';

      top_html += '<div class="save_load inline">';
      top_html += '<span class="mod_autosave"><input type="checkbox" id="mod_autosave" /><label for="mod_autosave">Autosave</label></span>';
      top_html += '<button id="mod_save">Save</button>';
      top_html += '<button id="mod_load">Load</button>';
      top_html += '</div>';

      top_html += '<span>Candies: <span id="mod_candies_qty">0</span></span>';

      top_html += '<div class="mod_lollipops inline">';
      top_html += '<span> | </span>';
      top_html += '<span>Lollipops: <span id="mod_lollipops_qty">0</span></span>';
      top_html += '</div>';

      top_html += '<div class="mod_candy_converter inline">';
      top_html += '<span> | </span>';
      top_html += '<span><input type="checkbox" id="mod_candy_converter" /><label for="mod_candy_converter">Candies converter</label></span>';
      top_html += '</div>';

      top_html += '</div>';

      $('body').prepend(top_html);

      Mod.top_bar.mod_candies = $('#mod_candies_qty');
      Mod.top_bar.mod_lollipops = $('#mod_lollipops_qty');

      $('#mod_save').on('click', Mod.game.save)
      $('#mod_load').on('click', Mod.game.load)

      $('#saveButton').remove()
      $('#save').remove()
      if ($('#candies_converter_checkbox').prop('checked')) $('#mod_candy_converter').prop('checked', true)
        $('#mod_candy_converter').on('click', function(){ $('#candies_converter_checkbox').click() })

      Mod.top_bar.interval.setUp();

      console.log('Top bar initialized!')
    }
  },
  hotkeys: {
    interval: {
      id: null,
      loop: function() {

      },
      setUp: function() {
        Mod.hotkeys.interval.id = setInterval(Mod.hotkeys.interval.loop, 1000)
      }
    },
    setUp: function(){
      var buttons = $('#quest_potions button');
      $(buttons[0]).prop('id', 'seed_potion');

      $(buttons[1]).prop('id', 'helth_potion');
      $(buttons[2]).prop('id', 'escape_potion');
      $(buttons[3]).prop('id', 'berserk_potion');

      $(buttons[4]).prop('id', 'major_health_potion');
      $(buttons[5]).prop('id', 'invulnerability_potion');
      $(buttons[6]).prop('id', 'superman_potion');
      $(buttons[7]).prop('id', 'cloning_potion');
      $(buttons[8]).prop('id', 'gmooh_potion');

      $(buttons[9]).prop('id', 'fire_scroll');
      $(buttons[10]).prop('id', 'acid_scroll');
      $(buttons[11]).prop('id', 'teleport_scroll');
      $(buttons[12]).prop('id', 'imp_scroll');
      $(buttons[13]).prop('id', 'earthquake_scroll');


      $(window).off('keypress', Mod.hotkeys.onKeyPress)
      $(window).on('keypress', Mod.hotkeys.onKeyPress)
      console.log('Hotkeys initialized!')
    },
    keys: {
      48: 'seed_potion', // 0

      49: 'helth_potion', // 1
      50: 'escape_potion', // 2
      51: 'berserk_potion', // 3

      52: 'major_health_potion', //4
      53: 'invulnerability_potion', // 5
      54: 'superman_potion', // 6
      55: 'cloning_potion', // 7
      56: 'gmooh_potion', // 8

      113: 'fire_scroll', // q
      119: 'acid_scroll',
      101: 'teleport_scroll',
      97: 'imp_scroll',
      115: 'earthquake_scroll',
    },
    onKeyPress: function (event) {
      var keys = Mod.hotkeys.keys;
      console.log(keys[event.charCode], $('.'+keys[event.charCode]))
      if (keys[event.charCode] != undefined)
        $('#'+keys[event.charCode]).click()
    }
  },  
  loadFiles: function() {
    Mod.system.load.stylesheet('http://localhost/candy-box-extension/style.css');
    Mod.system.load.script('http://raw.github.com/jquery/jquery-color/master/jquery.color.js');
    Mod.system.load.script('http://cdnjs.cloudflare.com/ajax/libs/numeral.js/1.4.5/numeral.min.js');
  },  
  setUp: function() {
    Mod.loadFiles();
    Mod.top_bar.setUp();
    Mod.game.setUp();
    Mod.hotkeys.setUp();
  }
};

Mod.setUp();

console.log('Candybox Mod loaded!')



const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;



function init() {	
}

function enable() {
   	Main.messageTray._notificationBin.set_alignment(St.Align.START,St.Align.MIDDLE);
}

function disable() {
    Main.messageTray._notificationBin.set_alignment(St.Align.MIDDLE,St.Align.MIDDLE);
}

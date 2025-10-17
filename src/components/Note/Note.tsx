interface NoteType {
    text: string,
};

function Note ({text}: NoteType) {
    return <span className="text-xs text-red-500/80">{text}</span>
};

export { Note };
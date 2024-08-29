import {create} from 'zustand'

type conversationType ={
    id: string;
    fullName: string;
    profilePic: string
}
type MessageType = {
    id: string;
    body: string;
    senderId: string;

}

interface conversationState {
    selectedConversation: conversationType | null
    messages:MessageType[]
    setSelectedConversation: (conversation: conversationType | null) => void
    setMessages: (messages: MessageType[]) => void
}

// const [state, setState] = useState(null)
const useConversation = create<conversationState> ((set) => ({
    selectedConversation : null,
    setSelectedConversation : (conversation) => set({selectedConversation: conversation }),
    messages: [],
    setMessages: (messages) => set({ messages: messages})

}))

export default useConversation


// js VERSION
// import {create} from 'zustand'
//  const useConversation = create<conversationState> ((set) => ({
//     selectedConversation : null,
//     setSelectedConversation : (conversation) => set({selectedConversation: conversation }),
//     messages: [],
//     setMessages: (messages) => set({ messages: messages})

// }))

// export default useConversation
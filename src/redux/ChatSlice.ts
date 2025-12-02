import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ChatState {
    chatId: string;
    message: string;
    timestamp: string;
}

const initialState: ChatState[] = [{
    chatId: "1",
    message: "Hello how can I help you?",
    timestamp: Date.now().toString()
}]

export const ChatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addChat: (state, action: PayloadAction<ChatState>) => {
            state.push(action.payload);
        }
    }
})

export const { addChat } = ChatSlice.actions;
export default ChatSlice.reducer;
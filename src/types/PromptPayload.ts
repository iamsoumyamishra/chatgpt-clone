export interface PromptInterface {
    role: "user" | "system";
    content: string;
}

export default interface ChatInterface {
    prompt: PromptInterface[]
}
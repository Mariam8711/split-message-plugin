export const splitMessage = (message: string, chunkSize: number = 2000): string[] => {
    const messages: string[] = [];

    // Split the message into smaller chunks
    for (let i = 0; i < message.length; i += chunkSize) {
        messages.push(message.slice(i, i + chunkSize));
    }

    return messages;
};

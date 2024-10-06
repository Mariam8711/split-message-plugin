import { Plugin } from 'vencord';
import { splitMessage } from './utils';

export default class SplitMessagePlugin extends Plugin {
    onStart() {
        console.log('Split Message Plugin is now active!');
        this.registerCommand();
    }

    onStop() {
        console.log('Split Message Plugin has been stopped!');
    }

    private registerCommand() {
        // Registering a command to split messages
        this.client.on('messageCreate', async (message) => {
            if (message.content.startsWith('!split ')) {
                const content = message.content.slice(7); // Remove the command
                const chunks = splitMessage(content);

                for (const chunk of chunks) {
                    await message.channel.send(chunk); // Send each chunk as a separate message
                }

                // Delete the original message (optional)
                await message.delete();
            }
        });
    }
}

import {Queue, LinkedList} from 'typescript-collections'

namespace Collections{
    export class QueueTest {
        public static main():void {
            let queue:Queue<number> = new Queue<number>();
            queue.enqueue(1);
            queue.enqueue(2);
            while(!queue.isEmpty()) {
                console.log(queue.dequeue());
            }

        }
    }
}


Collections.QueueTest.main();
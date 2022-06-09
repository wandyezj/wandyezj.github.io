
#include <assert.h>     /* assert */

#include <iostream>
#include <chrono>
#include <random>


// Node for a singly linked list
struct Node {
    // nullptr if last node in the list
    Node* next;

    // could be a template T
    int data;
};


/*
headA and headB are sorted singly linked lists, sorted in ascending order, ending with a next value of nullptr.

combine merges the two lists destroying the next sequence of a and b and returns the start of the list.

assumes: NO cycles between nodes

*/
Node* combine(Node* headA, Node* headB) {

    // headA or headB could be nullptr, simply return the head of the other list.
    if (headA == nullptr) {
        return headB;
    }

    if (headB == nullptr) {
        return headA;
    }

    // assert: no cycles within headA, headB, or between headA and headB

    Node* nextA = headA;
    Node* nextB = headB;

    // starting node
    Node* head = nullptr;

    // current node
    Node* next = nullptr;

    // go through a and b and join them together with next
    while (nextA != nullptr && nextB != nullptr) {

        // should we next be a or b? depends...
        int a = nextA->data;
        int b = nextB->data;

        Node* pick;

        // determine next and move selected head forward
        if (a < b) {
            pick = nextA;
            nextA = nextA->next;
        } else {
            pick = nextB;
            nextB = nextB->next;
        }

        // Make pick next node in the list
        if (head == nullptr) {
            // first node in the list
            head = pick;
            next = pick;
        } else {
            // chain to last node
            next->next = pick;
            next = pick;
        }
    }

    // note: at the end of the while loop either nextA or nextB is nullptr.
    assert(nextA == nullptr || nextB == nullptr);

    // optimize: can skip second check and use else, since other will be null

    // append remaining elements in a
    if (nextA != nullptr) {
        next->next = nextA;
    }

    // append remaining elements in b
    if (nextB != nullptr) {
        next->next = nextB;
    }

    return head;
}

// note: C++ singly linked list is forward_list

void print(Node* head) {
    auto next = head;
    while (next != nullptr) {
        std::cout << next->data << std::endl;
    }
}

int main(int argc, char* argv[]) {

    // run some tests

    // initialize two lists of nodes
    // make it a single big array with pointers to next nodes in the array
    // set last node next to nullptr.
    // cut array in half by setting middle node to nullptr
    // get pointers to two heads

    // https://cplusplus.com/reference/random/uniform_int_distribution/operator()/
    // construct a trivial random generator engine from a time-based seed:
    unsigned seed = std::chrono::system_clock::now().time_since_epoch().count();
    std::default_random_engine generator (seed);

    std::uniform_int_distribution<int> distribution(0,9);

    
    const size_t size = 10;
    Node nodes[10] = {};
    for (size_t i = 0; i < size; i++) {
        auto data = distribution(generator);
        auto &node = nodes[i];
        node.data = data;
        node.next = &(nodes[i+1]);
        
    }

    nodes[size -1].next = nullptr;

    for (size_t i = 0; i < size; i++) {
        auto &node = nodes[i];
        auto data = node.next == nullptr ? -1 : node.next->data;
        std::cout << i <<" " << node.data << " " << data << std::endl;
    }



    //print(&nodes[0]);



    // combine the lists


    // check that combined list is sorted

    std::cout << "hello" << std::endl;
}


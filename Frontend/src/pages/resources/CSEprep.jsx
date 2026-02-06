import Techincalconcepcard from "./Technicalconcepcard";

function CSEprep(){
    
    const data = {
  "Computer Science Subjects": {
    "Data Structures": {
      "important_topics": {
        "Arrays": "https://www.geeksforgeeks.org/array-data-structure/",
        "Linked Lists": "https://www.geeksforgeeks.org/data-structures/linked-list/",
        "Stacks & Queues": "https://www.geeksforgeeks.org/stack-data-structure/",
        "Trees": "https://www.geeksforgeeks.org/binary-tree-data-structure/",
        "Graphs": "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
      }
    },
    "Algorithms": {
      "important_topics": {
        "Sorting Algorithms": "https://www.geeksforgeeks.org/sorting-algorithms/",
        "Searching Algorithms": "https://www.geeksforgeeks.org/searching-algorithms/",
        "Dynamic Programming": "https://www.geeksforgeeks.org/dynamic-programming/",
        "Greedy Algorithms": "https://www.geeksforgeeks.org/greedy-algorithms/",
        
      }
    },
    "Operating Systems": {
      "important_topics": {
        "Process Management": "https://www.geeksforgeeks.org/operating-systems/introduction-of-process-management/",
        "Threads & Concurrency": "https://www.geeksforgeeks.org/multithreading-in-operating-system/",
        "Memory Management": "https://www.geeksforgeeks.org/memory-management-in-operating-system/",
        "File Systems": "https://www.geeksforgeeks.org/operating-systems/file-systems-in-operating-system/",
        "Deadlocks": "https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/"
      }
    },
    "Databases": {
      "important_topics": {
        "ER Model": "https://www.geeksforgeeks.org/dbms/introduction-of-er-model/",
        "Normalization": "https://www.geeksforgeeks.org/dbms/introduction-of-database-normalization/",
        "SQL Queries": "https://www.geeksforgeeks.org/sql-tutorial/",
        "Transactions": "https://www.geeksforgeeks.org/transaction-in-dbms/",
        "Indexing": "https://www.geeksforgeeks.org/indexing-in-databases-set-1/"
      }
    },
    "Computer Networks": {
      "important_topics": {
        "OSI Model": "https://www.geeksforgeeks.org/layers-of-osi-model/",
        "TCP/IP": "https://www.geeksforgeeks.org/tcp-ip-model/",
        "IP Addressing": "https://www.geeksforgeeks.org/computer-science-fundamentals/what-is-an-ip-address/",
        "Routing Algorithms": "https://www.geeksforgeeks.org/computer-networks/classification-of-routing-algorithms/",
        "Network Security": "https://www.geeksforgeeks.org/network-security/"
      }
    }
  }
};
      const subjects = data["Computer Science Subjects"];
    return (
        <div>
        <h1>Core CS subjects</h1>
        <Techincalconcepcard subjects={subjects}></Techincalconcepcard>
        </div>
    )
}

export default CSEprep;
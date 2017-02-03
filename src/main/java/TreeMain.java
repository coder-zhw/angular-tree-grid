import java.util.ArrayList;
import java.util.List;

/**
 * Created by Edward on 2017/2/4.
 */
public class TreeMain {
    public static void main(String[] args){
        List<TreeObject> treeList = new ArrayList<TreeObject>();
        TreeObject t1 = new TreeObject();
        t1.setId(1);
        t1.setParentId(null);
        t1.setName("node-1");
        TreeObject t3 = new TreeObject();
        t3.setId(3);
        t3.setParentId(1);
        t3.setName("node-1.2");
        TreeObject t2 = new TreeObject();
        t2.setId(2);
        t2.setParentId(null);
        t2.setName("node-2");
        TreeObject t4 = new TreeObject();
        t4.setId(4);
        t4.setParentId(2);
        t4.setName("node-2.2");
        treeList.add(t1);
        treeList.add(t2);
        treeList.add(t3);
        treeList.add(t4);
        TreeObjectSrv ts = new TreeObjectSrv();

        List<TreeObject> tree = ts.getChildTreeObjects(treeList, null);

        System.out.println("tree.size()="+tree.size());
    }
}

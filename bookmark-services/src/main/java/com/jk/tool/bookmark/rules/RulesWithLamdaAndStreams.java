package com.jk.tool.bookmark.rules;


import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;


public class RulesWithLamdaAndStreams {


    public List<Supplier> getSupplierList() {

        List<Supplier> resultSuppliers = new ArrayList<Supplier>();


        Supplier supplier1 = new Supplier();
        supplier1.setSupplierId("1");
        supplier1.setSupplierName("sup1");

        Supplier supplier2 = new Supplier();
        supplier2.setSupplierId("2");
        supplier2.setSupplierName("sup2");

        resultSuppliers.add(supplier1);
        resultSuppliers.add(supplier2);

        return resultSuppliers;


    }

    public List<Supplier> getSupplierFileNames() {

        List<Supplier> resultSuppliers = new ArrayList<Supplier>();


        Supplier supplier1 = new Supplier();
        supplier1.setSupplierId("1");
        supplier1.setSupplierName("this is abc hotel in town");

        Supplier supplier2 = new Supplier();
        supplier2.setSupplierId("2");
        supplier2.setSupplierName("a rest ss");

        resultSuppliers.add(supplier1);
        resultSuppliers.add(supplier2);

        return resultSuppliers;


    }

    private boolean hasIgnoredNames(String supplierFileName) {
        List<String> ignoreNames = new ArrayList<String>();
        ignoreNames.add("hotel");
        ignoreNames.add("restaurant");
        ignoreNames.add("insurance");

        Predicate<String> p1 = s -> supplierFileName.contains(s);
        return ignoreNames.stream().anyMatch(p1);


    }

    public List<Supplier> getAllSuggestedSuppliers(List<Supplier> supplierFileNames) {

        List<Supplier> suggestedSuppliers = new ArrayList<Supplier>();

        Predicate<Supplier> p1 = s -> hasIgnoredNames(s.getSupplierName());
        RulesWithLamdaAndStreams supplierRuleBook = new RulesWithLamdaAndStreams();

        boolean c1 = supplierFileNames.stream().anyMatch(p1);
        System.out.println(c1);

        return null;
    }


    public static void main(String[] args) {
        RulesWithLamdaAndStreams supplierRuleBook = new RulesWithLamdaAndStreams();
        System.out.println(supplierRuleBook.getSupplierList());
        supplierRuleBook.getAllSuggestedSuppliers(supplierRuleBook.getSupplierFileNames());
    }


    public class Supplier {

        private long rowId;

        private String supplierId;

        private String supplierName;

        public long getRowId() {
            return rowId;
        }

        public void setRowId(long rowId) {
            this.rowId = rowId;
        }

        public String getSupplierId() {
            return supplierId;
        }

        public void setSupplierId(String supplierId) {
            this.supplierId = supplierId;
        }

        public String getSupplierName() {
            return supplierName;
        }

        public void setSupplierName(String supplierName) {
            this.supplierName = supplierName;
        }

    }


}
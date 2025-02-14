'use client'
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmployeeExecList from "@/components/page/about/allemployee/EmployeeExecList";
import EmployeeOpsList from "@/components/page/about/allemployee/EmployeeOpsList";
import EmployeeMarketingList from "@/components/page/about/allemployee/EmployeeMarketingList";
import EmployeeProductList from "@/components/page/about/allemployee/EmployeeProductList";
import EmployeeTiList from "@/components/page/about/allemployee/EmployeeTiList";

export default function Emplopyee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-10 lg:px-20 xl:px-40 pt-10">
      <Tabs defaultValue="executive" className="flex flex-col items-center justify-centez`r mt-10">
        <TabsList className="mb-10 flex items-center justify-center flex-wrap h-auto space-y-1">
          <TabsTrigger value="executive" className="w-[212px] border border-title">Manajemen Eksekutif</TabsTrigger>
          <TabsTrigger value="operasional" className="w-[212px] border border-title">Operasional</TabsTrigger>
          <TabsTrigger value="marketing" className="w-[212px] border border-title">Marketing</TabsTrigger>
          <TabsTrigger value="produk" className="w-[212px] border border-title">Produk</TabsTrigger>
          <TabsTrigger value="ti" className="w-[212px] border border-title">Teknologi Informasi</TabsTrigger>
        </TabsList>
        <div className="div">
          <TabsContent value="executive">
            <EmployeeExecList />
          </TabsContent>
          <TabsContent value="operasional">
            <EmployeeOpsList />
          </TabsContent>
          <TabsContent value="marketing">
            <EmployeeMarketingList />
          </TabsContent>
          <TabsContent value="produk">
            <EmployeeProductList />
          </TabsContent>
          <TabsContent value="ti">
            <EmployeeTiList />
          </TabsContent>
        </div>
      </Tabs>
    </div>);
}
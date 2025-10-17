import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { QuoteRequest } from "@shared/schema";
import { Eye, Trash2, Calculator, Mail, Phone, Building2 } from "lucide-react";
import { format } from "date-fns";

export default function AdminQuotesPage() {
  const { toast } = useToast();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [adminNotes, setAdminNotes] = useState("");

  const { data: quotes = [], isLoading } = useQuery<QuoteRequest[]>({
    queryKey: ["/api/admin/quotes", statusFilter],
    queryFn: async () => {
      const url = statusFilter === "all" ? "/api/admin/quotes" : `/api/admin/quotes?status=${statusFilter}`;
      const res = await fetch(url);
      return res.json();
    },
  });

  const updateQuoteMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<QuoteRequest> }) => {
      return await apiRequest("PATCH", `/api/admin/quotes/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/quotes"] });
      toast({
        title: "Quote Updated",
        description: "Quote status has been updated successfully.",
      });
      setDetailsOpen(false);
      setSelectedQuote(null);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update quote.",
        variant: "destructive",
      });
    },
  });

  const deleteQuoteMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest("DELETE", `/api/admin/quotes/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/quotes"] });
      toast({
        title: "Quote Deleted",
        description: "Quote request has been deleted.",
      });
      setDetailsOpen(false);
      setSelectedQuote(null);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete quote.",
        variant: "destructive",
      });
    },
  });

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setNewStatus(quote.status);
    setAdminNotes(quote.adminNotes || "");
    setDetailsOpen(true);
  };

  const handleUpdateStatus = () => {
    if (!selectedQuote) return;
    
    updateQuoteMutation.mutate({
      id: selectedQuote.id,
      data: { status: newStatus, adminNotes },
    });
  };

  const handleDelete = () => {
    if (!selectedQuote || !confirm("Are you sure you want to delete this quote request?")) return;
    
    deleteQuoteMutation.mutate(selectedQuote.id);
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "new":
        return "default";
      case "contacted":
        return "secondary";
      case "converted":
        return "default";
      case "lost":
        return "destructive";
      default:
        return "default";
    }
  };

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" data-testid="heading-admin-quotes">Quote Requests</h1>
        <p className="text-muted-foreground">Manage and track client quote requests</p>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48" data-testid="select-status-filter">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Quotes</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="converted">Converted</SelectItem>
            <SelectItem value="lost">Lost</SelectItem>
          </SelectContent>
        </Select>
        <div className="text-sm text-muted-foreground">
          {quotes.length} quote{quotes.length !== 1 ? "s" : ""}
        </div>
      </div>

      {quotes.length === 0 ? (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <div className="text-center">
              <Calculator className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No quote requests found</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Business</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quotes.map((quote) => (
                  <TableRow key={quote.id} data-testid={`row-quote-${quote.id}`}>
                    <TableCell>
                      {format(new Date(quote.createdAt), "MMM dd, yyyy")}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium" data-testid={`text-name-${quote.id}`}>
                          {quote.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {quote.company}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div>{quote.businessTypeName}</div>
                        <div className="text-sm text-muted-foreground">
                          {quote.turnover}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold" data-testid={`text-total-${quote.id}`}>
                        £{parseFloat(quote.grandTotal).toFixed(2)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={getStatusBadgeVariant(quote.status)}
                        data-testid={`badge-status-${quote.id}`}
                      >
                        {quote.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewDetails(quote)}
                        data-testid={`button-view-${quote.id}`}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Quote Request Details</DialogTitle>
            <DialogDescription>
              Quote #{selectedQuote?.id} - {selectedQuote && format(new Date(selectedQuote.createdAt), "MMMM dd, yyyy")}
            </DialogDescription>
          </DialogHeader>

          {selectedQuote && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span data-testid="text-quote-email">{selectedQuote.email}</span>
                    </div>
                    {selectedQuote.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{selectedQuote.phone}</span>
                      </div>
                    )}
                    {selectedQuote.company && (
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-muted-foreground" />
                        <span>{selectedQuote.company}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Business Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Type:</span> {selectedQuote.businessTypeName}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Turnover:</span> {selectedQuote.turnover}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Employees:</span> {selectedQuote.employeeCount}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Pricing Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Accounting Fees:</span>
                    <span>£{parseFloat(selectedQuote.basePrice).toFixed(2)}</span>
                  </div>
                  {parseFloat(selectedQuote.payrollPrice) > 0 && (
                    <div className="flex justify-between">
                      <span>Payroll ({selectedQuote.payrollPackageName}):</span>
                      <span>£{parseFloat(selectedQuote.payrollPrice).toFixed(2)}</span>
                    </div>
                  )}
                  {parseFloat(selectedQuote.additionalServicesTotal) > 0 && (
                    <div className="flex justify-between">
                      <span>Additional Services:</span>
                      <span>£{parseFloat(selectedQuote.additionalServicesTotal).toFixed(2)}</span>
                    </div>
                  )}
                  {selectedQuote.additionalServiceNames.length > 0 && (
                    <div className="text-sm text-muted-foreground pl-4">
                      {selectedQuote.additionalServiceNames.join(", ")}
                    </div>
                  )}
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Subtotal:</span>
                    <span>£{parseFloat(selectedQuote.subtotal).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>VAT (20%):</span>
                    <span>£{parseFloat(selectedQuote.vatAmount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total:</span>
                    <span className="text-primary">£{parseFloat(selectedQuote.grandTotal).toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              {selectedQuote.message && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Client Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{selectedQuote.message}</p>
                  </CardContent>
                </Card>
              )}

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Update Status</label>
                  <Select value={newStatus} onValueChange={setNewStatus}>
                    <SelectTrigger data-testid="select-quote-status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="converted">Converted</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Admin Notes</label>
                  <Textarea
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Add internal notes about this quote..."
                    rows={3}
                    data-testid="textarea-admin-notes"
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleteQuoteMutation.isPending}
              data-testid="button-delete-quote"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
            <Button
              onClick={handleUpdateStatus}
              disabled={updateQuoteMutation.isPending}
              data-testid="button-update-quote"
            >
              {updateQuoteMutation.isPending ? "Updating..." : "Update Quote"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

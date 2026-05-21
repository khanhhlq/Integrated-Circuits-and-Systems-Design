/**********************************************************************/
/*   ____  ____                                                       */
/*  /   /\/   /                                                       */
/* /___/  \  /                                                        */
/* \   \   \/                                                       */
/*  \   \        Copyright (c) 2003-2009 Xilinx, Inc.                */
/*  /   /          All Right Reserved.                                 */
/* /---/   /\                                                         */
/* \   \  /  \                                                      */
/*  \___\/\___\                                                    */
/***********************************************************************/

/* This file is designed for use with ISim build 0xfbc00daa */

#define XSI_HIDE_SYMBOL_SPEC true
#include "xsi.h"
#include <memory.h>
#ifdef __GNUC__
#include <stdlib.h>
#else
#include <malloc.h>
#define alloca _alloca
#endif
static const char *ng0 = "/home/ise/D_DRIVE/Integrated-Circuits-and-Systems-Design/jk-flip-flop/design.v";
static unsigned int ng1[] = {1U, 0U};
static unsigned int ng2[] = {0U, 0U};
static unsigned int ng3[] = {2U, 0U};
static unsigned int ng4[] = {3U, 0U};



static void Always_2_0(char *t0)
{
    char t4[8];
    char t13[8];
    char t25[8];
    char t34[8];
    char t42[8];
    char *t1;
    char *t2;
    char *t3;
    char *t5;
    char *t6;
    unsigned int t7;
    unsigned int t8;
    unsigned int t9;
    unsigned int t10;
    unsigned int t11;
    char *t12;
    char *t14;
    unsigned int t15;
    unsigned int t16;
    unsigned int t17;
    unsigned int t18;
    unsigned int t19;
    char *t20;
    char *t21;
    unsigned int t22;
    unsigned int t23;
    unsigned int t24;
    char *t26;
    char *t27;
    unsigned int t28;
    unsigned int t29;
    unsigned int t30;
    unsigned int t31;
    unsigned int t32;
    char *t33;
    char *t35;
    unsigned int t36;
    unsigned int t37;
    unsigned int t38;
    unsigned int t39;
    unsigned int t40;
    char *t41;
    unsigned int t43;
    unsigned int t44;
    unsigned int t45;
    char *t46;
    char *t47;
    char *t48;
    unsigned int t49;
    unsigned int t50;
    unsigned int t51;
    unsigned int t52;
    unsigned int t53;
    unsigned int t54;
    unsigned int t55;
    char *t56;
    char *t57;
    unsigned int t58;
    unsigned int t59;
    unsigned int t60;
    unsigned int t61;
    unsigned int t62;
    unsigned int t63;
    unsigned int t64;
    unsigned int t65;
    int t66;
    int t67;
    unsigned int t68;
    unsigned int t69;
    unsigned int t70;
    unsigned int t71;
    unsigned int t72;
    unsigned int t73;
    char *t74;
    unsigned int t75;
    unsigned int t76;
    unsigned int t77;
    unsigned int t78;
    unsigned int t79;
    char *t80;
    char *t81;

LAB0:    t1 = (t0 + 3160U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(2, ng0);
    t2 = (t0 + 3480);
    *((int *)t2) = 1;
    t3 = (t0 + 3192);
    *((char **)t3) = t2;
    *((char **)t1) = &&LAB4;

LAB1:    return;
LAB4:    xsi_set_current_line(2, ng0);

LAB5:    xsi_set_current_line(3, ng0);
    t5 = (t0 + 1528U);
    t6 = *((char **)t5);
    memset(t4, 0, 8);
    t5 = (t6 + 4);
    t7 = *((unsigned int *)t5);
    t8 = (~(t7));
    t9 = *((unsigned int *)t6);
    t10 = (t9 & t8);
    t11 = (t10 & 1U);
    if (t11 != 0)
        goto LAB9;

LAB7:    if (*((unsigned int *)t5) == 0)
        goto LAB6;

LAB8:    t12 = (t4 + 4);
    *((unsigned int *)t4) = 1;
    *((unsigned int *)t12) = 1;

LAB9:    memset(t13, 0, 8);
    t14 = (t4 + 4);
    t15 = *((unsigned int *)t14);
    t16 = (~(t15));
    t17 = *((unsigned int *)t4);
    t18 = (t17 & t16);
    t19 = (t18 & 1U);
    if (t19 != 0)
        goto LAB10;

LAB11:    if (*((unsigned int *)t14) != 0)
        goto LAB12;

LAB13:    t21 = (t13 + 4);
    t22 = *((unsigned int *)t13);
    t23 = *((unsigned int *)t21);
    t24 = (t22 || t23);
    if (t24 > 0)
        goto LAB14;

LAB15:    memcpy(t42, t13, 8);

LAB16:    t74 = (t42 + 4);
    t75 = *((unsigned int *)t74);
    t76 = (~(t75));
    t77 = *((unsigned int *)t42);
    t78 = (t77 & t76);
    t79 = (t78 != 0);
    if (t79 > 0)
        goto LAB28;

LAB29:    xsi_set_current_line(7, ng0);
    t2 = (t0 + 1528U);
    t3 = *((char **)t2);
    memset(t4, 0, 8);
    t2 = (t3 + 4);
    t7 = *((unsigned int *)t2);
    t8 = (~(t7));
    t9 = *((unsigned int *)t3);
    t10 = (t9 & t8);
    t11 = (t10 & 1U);
    if (t11 != 0)
        goto LAB35;

LAB33:    if (*((unsigned int *)t2) == 0)
        goto LAB32;

LAB34:    t5 = (t4 + 4);
    *((unsigned int *)t4) = 1;
    *((unsigned int *)t5) = 1;

LAB35:    t6 = (t4 + 4);
    t15 = *((unsigned int *)t6);
    t16 = (~(t15));
    t17 = *((unsigned int *)t4);
    t18 = (t17 & t16);
    t19 = (t18 != 0);
    if (t19 > 0)
        goto LAB36;

LAB37:    xsi_set_current_line(11, ng0);
    t2 = (t0 + 1688U);
    t3 = *((char **)t2);
    memset(t4, 0, 8);
    t2 = (t3 + 4);
    t7 = *((unsigned int *)t2);
    t8 = (~(t7));
    t9 = *((unsigned int *)t3);
    t10 = (t9 & t8);
    t11 = (t10 & 1U);
    if (t11 != 0)
        goto LAB43;

LAB41:    if (*((unsigned int *)t2) == 0)
        goto LAB40;

LAB42:    t5 = (t4 + 4);
    *((unsigned int *)t4) = 1;
    *((unsigned int *)t5) = 1;

LAB43:    t6 = (t4 + 4);
    t15 = *((unsigned int *)t6);
    t16 = (~(t15));
    t17 = *((unsigned int *)t4);
    t18 = (t17 & t16);
    t19 = (t18 != 0);
    if (t19 > 0)
        goto LAB44;

LAB45:    xsi_set_current_line(15, ng0);

LAB48:    xsi_set_current_line(16, ng0);
    t2 = (t0 + 1208U);
    t3 = *((char **)t2);
    t2 = (t0 + 1048U);
    t5 = *((char **)t2);
    xsi_vlogtype_concat(t4, 2, 2, 2U, t5, 1, t3, 1);

LAB49:    t2 = ((char*)((ng2)));
    t66 = xsi_vlog_unsigned_case_compare(t4, 2, t2, 2);
    if (t66 == 1)
        goto LAB50;

LAB51:    t2 = ((char*)((ng1)));
    t66 = xsi_vlog_unsigned_case_compare(t4, 2, t2, 2);
    if (t66 == 1)
        goto LAB52;

LAB53:    t2 = ((char*)((ng3)));
    t66 = xsi_vlog_unsigned_case_compare(t4, 2, t2, 2);
    if (t66 == 1)
        goto LAB54;

LAB55:    t2 = ((char*)((ng4)));
    t66 = xsi_vlog_unsigned_case_compare(t4, 2, t2, 2);
    if (t66 == 1)
        goto LAB56;

LAB57:
LAB58:
LAB46:
LAB38:
LAB30:    goto LAB2;

LAB6:    *((unsigned int *)t4) = 1;
    goto LAB9;

LAB10:    *((unsigned int *)t13) = 1;
    goto LAB13;

LAB12:    t20 = (t13 + 4);
    *((unsigned int *)t13) = 1;
    *((unsigned int *)t20) = 1;
    goto LAB13;

LAB14:    t26 = (t0 + 1688U);
    t27 = *((char **)t26);
    memset(t25, 0, 8);
    t26 = (t27 + 4);
    t28 = *((unsigned int *)t26);
    t29 = (~(t28));
    t30 = *((unsigned int *)t27);
    t31 = (t30 & t29);
    t32 = (t31 & 1U);
    if (t32 != 0)
        goto LAB20;

LAB18:    if (*((unsigned int *)t26) == 0)
        goto LAB17;

LAB19:    t33 = (t25 + 4);
    *((unsigned int *)t25) = 1;
    *((unsigned int *)t33) = 1;

LAB20:    memset(t34, 0, 8);
    t35 = (t25 + 4);
    t36 = *((unsigned int *)t35);
    t37 = (~(t36));
    t38 = *((unsigned int *)t25);
    t39 = (t38 & t37);
    t40 = (t39 & 1U);
    if (t40 != 0)
        goto LAB21;

LAB22:    if (*((unsigned int *)t35) != 0)
        goto LAB23;

LAB24:    t43 = *((unsigned int *)t13);
    t44 = *((unsigned int *)t34);
    t45 = (t43 & t44);
    *((unsigned int *)t42) = t45;
    t46 = (t13 + 4);
    t47 = (t34 + 4);
    t48 = (t42 + 4);
    t49 = *((unsigned int *)t46);
    t50 = *((unsigned int *)t47);
    t51 = (t49 | t50);
    *((unsigned int *)t48) = t51;
    t52 = *((unsigned int *)t48);
    t53 = (t52 != 0);
    if (t53 == 1)
        goto LAB25;

LAB26:
LAB27:    goto LAB16;

LAB17:    *((unsigned int *)t25) = 1;
    goto LAB20;

LAB21:    *((unsigned int *)t34) = 1;
    goto LAB24;

LAB23:    t41 = (t34 + 4);
    *((unsigned int *)t34) = 1;
    *((unsigned int *)t41) = 1;
    goto LAB24;

LAB25:    t54 = *((unsigned int *)t42);
    t55 = *((unsigned int *)t48);
    *((unsigned int *)t42) = (t54 | t55);
    t56 = (t13 + 4);
    t57 = (t34 + 4);
    t58 = *((unsigned int *)t13);
    t59 = (~(t58));
    t60 = *((unsigned int *)t56);
    t61 = (~(t60));
    t62 = *((unsigned int *)t34);
    t63 = (~(t62));
    t64 = *((unsigned int *)t57);
    t65 = (~(t64));
    t66 = (t59 & t61);
    t67 = (t63 & t65);
    t68 = (~(t66));
    t69 = (~(t67));
    t70 = *((unsigned int *)t48);
    *((unsigned int *)t48) = (t70 & t68);
    t71 = *((unsigned int *)t48);
    *((unsigned int *)t48) = (t71 & t69);
    t72 = *((unsigned int *)t42);
    *((unsigned int *)t42) = (t72 & t68);
    t73 = *((unsigned int *)t42);
    *((unsigned int *)t42) = (t73 & t69);
    goto LAB27;

LAB28:    xsi_set_current_line(3, ng0);

LAB31:    xsi_set_current_line(4, ng0);
    t80 = ((char*)((ng1)));
    t81 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t81, t80, 0, 0, 1, 0LL);
    xsi_set_current_line(5, ng0);
    t2 = ((char*)((ng1)));
    t3 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB30;

LAB32:    *((unsigned int *)t4) = 1;
    goto LAB35;

LAB36:    xsi_set_current_line(7, ng0);

LAB39:    xsi_set_current_line(8, ng0);
    t12 = ((char*)((ng1)));
    t14 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t14, t12, 0, 0, 1, 0LL);
    xsi_set_current_line(9, ng0);
    t2 = ((char*)((ng2)));
    t3 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB38;

LAB40:    *((unsigned int *)t4) = 1;
    goto LAB43;

LAB44:    xsi_set_current_line(11, ng0);

LAB47:    xsi_set_current_line(12, ng0);
    t12 = ((char*)((ng2)));
    t14 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t14, t12, 0, 0, 1, 0LL);
    xsi_set_current_line(13, ng0);
    t2 = ((char*)((ng1)));
    t3 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB46;

LAB50:    xsi_set_current_line(17, ng0);

LAB59:    xsi_set_current_line(18, ng0);
    t6 = (t0 + 2088);
    t12 = (t6 + 56U);
    t14 = *((char **)t12);
    t20 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t20, t14, 0, 0, 1, 0LL);
    xsi_set_current_line(19, ng0);
    t2 = (t0 + 2248);
    t3 = (t2 + 56U);
    t5 = *((char **)t3);
    t6 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t6, t5, 0, 0, 1, 0LL);
    goto LAB58;

LAB52:    xsi_set_current_line(21, ng0);

LAB60:    xsi_set_current_line(22, ng0);
    t3 = ((char*)((ng2)));
    t5 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t5, t3, 0, 0, 1, 0LL);
    xsi_set_current_line(23, ng0);
    t2 = ((char*)((ng1)));
    t3 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB58;

LAB54:    xsi_set_current_line(25, ng0);

LAB61:    xsi_set_current_line(26, ng0);
    t3 = ((char*)((ng1)));
    t5 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t5, t3, 0, 0, 1, 0LL);
    xsi_set_current_line(27, ng0);
    t2 = ((char*)((ng2)));
    t3 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB58;

LAB56:    xsi_set_current_line(29, ng0);

LAB62:    xsi_set_current_line(30, ng0);
    t3 = (t0 + 2088);
    t5 = (t3 + 56U);
    t6 = *((char **)t5);
    memset(t13, 0, 8);
    t12 = (t6 + 4);
    t7 = *((unsigned int *)t12);
    t8 = (~(t7));
    t9 = *((unsigned int *)t6);
    t10 = (t9 & t8);
    t11 = (t10 & 1U);
    if (t11 != 0)
        goto LAB66;

LAB64:    if (*((unsigned int *)t12) == 0)
        goto LAB63;

LAB65:    t14 = (t13 + 4);
    *((unsigned int *)t13) = 1;
    *((unsigned int *)t14) = 1;

LAB66:    t20 = (t13 + 4);
    t21 = (t6 + 4);
    t15 = *((unsigned int *)t6);
    t16 = (~(t15));
    *((unsigned int *)t13) = t16;
    *((unsigned int *)t20) = 0;
    if (*((unsigned int *)t21) != 0)
        goto LAB68;

LAB67:    t23 = *((unsigned int *)t13);
    *((unsigned int *)t13) = (t23 & 1U);
    t24 = *((unsigned int *)t20);
    *((unsigned int *)t20) = (t24 & 1U);
    t26 = (t0 + 2088);
    xsi_vlogvar_wait_assign_value(t26, t13, 0, 0, 1, 0LL);
    xsi_set_current_line(31, ng0);
    t2 = (t0 + 2248);
    t3 = (t2 + 56U);
    t5 = *((char **)t3);
    memset(t13, 0, 8);
    t6 = (t5 + 4);
    t7 = *((unsigned int *)t6);
    t8 = (~(t7));
    t9 = *((unsigned int *)t5);
    t10 = (t9 & t8);
    t11 = (t10 & 1U);
    if (t11 != 0)
        goto LAB72;

LAB70:    if (*((unsigned int *)t6) == 0)
        goto LAB69;

LAB71:    t12 = (t13 + 4);
    *((unsigned int *)t13) = 1;
    *((unsigned int *)t12) = 1;

LAB72:    t14 = (t13 + 4);
    t20 = (t5 + 4);
    t15 = *((unsigned int *)t5);
    t16 = (~(t15));
    *((unsigned int *)t13) = t16;
    *((unsigned int *)t14) = 0;
    if (*((unsigned int *)t20) != 0)
        goto LAB74;

LAB73:    t23 = *((unsigned int *)t13);
    *((unsigned int *)t13) = (t23 & 1U);
    t24 = *((unsigned int *)t14);
    *((unsigned int *)t14) = (t24 & 1U);
    t21 = (t0 + 2248);
    xsi_vlogvar_wait_assign_value(t21, t13, 0, 0, 1, 0LL);
    goto LAB58;

LAB63:    *((unsigned int *)t13) = 1;
    goto LAB66;

LAB68:    t17 = *((unsigned int *)t13);
    t18 = *((unsigned int *)t21);
    *((unsigned int *)t13) = (t17 | t18);
    t19 = *((unsigned int *)t20);
    t22 = *((unsigned int *)t21);
    *((unsigned int *)t20) = (t19 | t22);
    goto LAB67;

LAB69:    *((unsigned int *)t13) = 1;
    goto LAB72;

LAB74:    t17 = *((unsigned int *)t13);
    t18 = *((unsigned int *)t20);
    *((unsigned int *)t13) = (t17 | t18);
    t19 = *((unsigned int *)t14);
    t22 = *((unsigned int *)t20);
    *((unsigned int *)t14) = (t19 | t22);
    goto LAB73;

}


extern void work_m_02106519445904404821_0370641065_init()
{
	static char *pe[] = {(void *)Always_2_0};
	xsi_register_didat("work_m_02106519445904404821_0370641065", "isim/tb_isim_beh.exe.sim/work/m_02106519445904404821_0370641065.didat");
	xsi_register_executes(pe);
}
